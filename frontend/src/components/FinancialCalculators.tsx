'use client';

import React, { useState, useMemo } from 'react';
import {
  Calculator,
  TrendingUp,
  Percent,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Landmark,
  Coins,
  Calendar,
  CheckCircle2,
} from 'lucide-react';

interface FinancialCalculatorsProps {
  onOpenInquiry?: (serviceId: string) => void;
}

export default function FinancialCalculators({ onOpenInquiry }: FinancialCalculatorsProps) {
  const [activeTab, setActiveTab] = useState<'fd' | 'emi'>('fd');

  // --- FD Calculator State ---
  const [fdAmount, setFdAmount] = useState<number>(100000);
  const [fdTenureMonths, setFdTenureMonths] = useState<number>(36); // 3 years default
  const [isSeniorCitizen, setIsSeniorCitizen] = useState<boolean>(false);
  const [depositType, setDepositType] = useState<'fd' | 'rd'>('fd');

  // Base interest rates based on tenure
  const baseRate = useMemo(() => {
    if (depositType === 'rd') return 7.25;
    if (fdTenureMonths <= 6) return 5.5;
    if (fdTenureMonths <= 12) return 7.0;
    if (fdTenureMonths <= 24) return 7.5;
    if (fdTenureMonths <= 36) return 7.75;
    return 8.25; // 3 to 5 years
  }, [fdTenureMonths, depositType]);

  const effectiveRate = useMemo(() => {
    return isSeniorCitizen ? baseRate + 0.5 : baseRate;
  }, [baseRate, isSeniorCitizen]);

  // FD calculations
  const { totalMaturity, totalInterest } = useMemo(() => {
    const years = fdTenureMonths / 12;
    if (depositType === 'fd') {
      // Compound quarterly: A = P(1 + r/4)^(4*t)
      const r = effectiveRate / 100;
      const n = 4;
      const maturity = Math.round(fdAmount * Math.pow(1 + r / n, n * years));
      const interest = maturity - fdAmount;
      return { totalMaturity: maturity, totalInterest: interest };
    } else {
      // RD formula approx
      const monthlyP = fdAmount;
      const totalInvested = monthlyP * fdTenureMonths;
      const r = effectiveRate / 100 / 12;
      // Maturity of RD: M = P * [ (1+r)^n - 1 ] / (1 - (1+r)^(-1/3)) approx or standard:
      let maturity = 0;
      for (let i = 1; i <= fdTenureMonths; i++) {
        maturity += monthlyP * Math.pow(1 + effectiveRate / 400, (4 * (fdTenureMonths - i + 1)) / 12);
      }
      maturity = Math.round(maturity);
      return { totalMaturity: maturity, totalInterest: maturity - totalInvested };
    }
  }, [fdAmount, fdTenureMonths, effectiveRate, depositType]);

  // --- EMI Calculator State ---
  const [loanType, setLoanType] = useState<string>('gold');
  const [loanAmount, setLoanAmount] = useState<number>(200000);
  const [loanTenureMonths, setLoanTenureMonths] = useState<number>(36);

  // Interest rate per loan type
  const loanRate = useMemo(() => {
    switch (loanType) {
      case 'gold':
        return 9.0;
      case 'agri':
        return 7.0;
      case 'housing':
        return 9.0;
      case 'vehicle':
        return 9.75;
      case 'business':
        return 11.0;
      default:
        return 9.5;
    }
  }, [loanType]);

  // EMI formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const { monthlyEmi, totalLoanPayment, totalLoanInterest, principalPercent, interestPercent } = useMemo(() => {
    const p = loanAmount;
    const n = loanTenureMonths;
    const r = loanRate / 12 / 100;

    const emi = Math.round((p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    const totalPayable = emi * n;
    const interest = totalPayable - p;

    const pPct = Math.round((p / totalPayable) * 100);
    const iPct = 100 - pPct;

    return {
      monthlyEmi: emi,
      totalLoanPayment: totalPayable,
      totalLoanInterest: interest,
      principalPercent: pPct,
      interestPercent: iPct,
    };
  }, [loanAmount, loanTenureMonths, loanRate]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="w-full bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
      {/* Top Banner Ribbon */}
      <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 p-6 md:p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold tracking-wider uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Customer Financial Planning Suite
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Interactive Returns & EMI Calculator
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Plan your family savings and affordable credit with instant, transparent calculations backed by society bylaws.
            </p>
          </div>

          {/* Calculator Switch Tabs */}
          <div className="flex bg-navy-800/80 p-1.5 rounded-2xl border border-navy-700/60 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('fd')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'fd'
                  ? 'bg-amber-500 text-navy-950 shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <TrendingUp className="w-4 h-4" /> Deposit Returns
            </button>
            <button
              onClick={() => setActiveTab('emi')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'emi'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Calculator className="w-4 h-4" /> Loan EMI
            </button>
          </div>
        </div>
      </div>

      {/* CALCULATOR 1: FIXED DEPOSIT / RD */}
      {activeTab === 'fd' && (
        <div className="p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-7">
              {/* Deposit Mode & Senior Citizen Toggle */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700">Type:</span>
                  <button
                    type="button"
                    onClick={() => setDepositType('fd')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      depositType === 'fd'
                        ? 'bg-navy-900 text-white shadow-sm'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Fixed Deposit (Lump Sum)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDepositType('rd')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      depositType === 'rd'
                        ? 'bg-navy-900 text-white shadow-sm'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    Recurring Deposit (Monthly)
                  </button>
                </div>

                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={isSeniorCitizen}
                    onChange={(e) => setIsSeniorCitizen(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
                  />
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    Senior Citizen (+0.50% p.a.)
                  </span>
                </label>
              </div>

              {/* Deposit Amount Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-800">
                    {depositType === 'fd' ? 'Deposit Principal Amount' : 'Monthly RD Installment'}
                  </label>
                  <span className="text-lg font-extrabold text-navy-900 bg-navy-50 px-3 py-1 rounded-lg border border-navy-100">
                    {formatCurrency(fdAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={depositType === 'fd' ? 10000 : 500}
                  max={depositType === 'fd' ? 2500000 : 100000}
                  step={depositType === 'fd' ? 10000 : 500}
                  value={fdAmount}
                  onChange={(e) => setFdAmount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-navy-800"
                />
                <div className="flex justify-between text-[11px] text-slate-600 mt-1.5">
                  <span>{depositType === 'fd' ? '₹10,000' : '₹500/mo'}</span>
                  <span>{depositType === 'fd' ? '₹5 Lakhs' : '₹25,000/mo'}</span>
                  <span>{depositType === 'fd' ? '₹25 Lakhs' : '₹1 Lakh/mo'}</span>
                </div>
              </div>

              {/* Tenure Selection */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-800">Deposit Tenure</label>
                  <span className="text-sm font-bold text-slate-700">
                    {fdTenureMonths >= 12 ? `${fdTenureMonths / 12} Year${fdTenureMonths > 12 ? 's' : ''}` : `${fdTenureMonths} Months`} ({fdTenureMonths} Months)
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[6, 12, 24, 36, 60].map((months) => (
                    <button
                      key={months}
                      type="button"
                      onClick={() => setFdTenureMonths(months)}
                      className={`py-2 px-1 text-center rounded-xl text-xs font-bold border transition-all ${
                        fdTenureMonths === months
                          ? 'bg-navy-900 text-white border-navy-900 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {months >= 12 ? `${months / 12} Yr${months > 12 ? 's' : ''}` : `${months} Mos`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rate Highlight Pill */}
              <div className="flex items-center gap-3 p-3 bg-amber-50/80 rounded-xl border border-amber-200/80 text-amber-900 text-xs">
                <Percent className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>
                  Applicable Interest Rate:{' '}
                  <strong className="text-amber-950 font-extrabold text-sm">{effectiveRate.toFixed(2)}% p.a.</strong>{' '}
                  (Quarterly compounding yield guaranteed)
                </span>
              </div>
            </div>

            {/* Output Display Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-900 text-white rounded-3xl p-6 md:p-8 shadow-xl border border-navy-800 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-1">
                  Guaranteed Maturity Yield
                </span>
                <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
                  {formatCurrency(totalMaturity)}
                </div>

                <div className="space-y-3.5 border-t border-navy-800 pt-5 text-sm">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>{depositType === 'fd' ? 'Principal Invested' : 'Total Deposited'}</span>
                    <strong className="text-white">
                      {formatCurrency(depositType === 'fd' ? fdAmount : fdAmount * fdTenureMonths)}
                    </strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Total Interest Earned</span>
                    <strong className="text-emerald-400 text-base font-bold">
                      + {formatCurrency(totalInterest)}
                    </strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Interest Rate</span>
                    <strong className="text-amber-300">{effectiveRate.toFixed(2)}% p.a.</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Statutory Protection</span>
                    <span className="text-xs font-semibold text-emerald-300 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Co-operative Fiduciary
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={() => onOpenInquiry && onOpenInquiry('fixed-deposit')}
                  className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-navy-950 font-extrabold rounded-xl transition-all shadow-lg hover:shadow-amber-500/20 flex items-center justify-center gap-2 text-sm"
                >
                  Inquire This Deposit Scheme <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  No penalty on premature closure under verified medical emergencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CALCULATOR 2: LOAN EMI */}
      {activeTab === 'emi' && (
        <div className="p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Select Loan Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Select Loan Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'gold', label: 'Gold Loan', rate: '9.00%' },
                    { id: 'agri', label: 'Kisan Credit', rate: '7.00%' },
                    { id: 'housing', label: 'Home Repair', rate: '9.00%' },
                    { id: 'vehicle', label: 'Vehicle Loan', rate: '9.75%' },
                    { id: 'business', label: 'Micro Business', rate: '11.0%' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setLoanType(cat.id)}
                      className={`p-2.5 rounded-xl text-left border transition-all ${
                        loanType === cat.id
                          ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold shadow-sm ring-1 ring-emerald-600'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="text-xs font-bold">{cat.label}</div>
                      <div className="text-[11px] text-emerald-700 font-semibold">{cat.rate} p.a.</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Loan Amount Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-800">Required Loan Amount</label>
                  <span className="text-lg font-extrabold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                    {formatCurrency(loanAmount)}
                  </span>
                </div>
                <input
                  type="range"
                  min={25000}
                  max={2500000}
                  step={25000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
                />
                <div className="flex justify-between text-[11px] text-slate-600 mt-1.5">
                  <span>₹25,000</span>
                  <span>₹10 Lakhs</span>
                  <span>₹25 Lakhs</span>
                </div>
              </div>

              {/* Loan Tenure Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-800">Repayment Period</label>
                  <span className="text-sm font-bold text-slate-700">
                    {loanTenureMonths >= 12 ? `${loanTenureMonths / 12} Year${loanTenureMonths > 12 ? 's' : ''}` : `${loanTenureMonths} Months`} ({loanTenureMonths} EMIs)
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {[12, 24, 36, 60, 120].map((months) => (
                    <button
                      key={months}
                      type="button"
                      onClick={() => setLoanTenureMonths(months)}
                      className={`py-2 px-1 text-center rounded-xl text-xs font-bold border transition-all ${
                        loanTenureMonths === months
                          ? 'bg-emerald-700 text-white border-emerald-700 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {months >= 12 ? `${months / 12} Yr${months > 12 ? 's' : ''}` : `${months} Mos`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress Breakdown Bar */}
              <div className="pt-2">
                <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-navy-900 inline-block" /> Principal ({principalPercent}%)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" /> Total Interest ({interestPercent}%)
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden flex">
                  <div style={{ width: `${principalPercent}%` }} className="bg-navy-900 h-full" />
                  <div style={{ width: `${interestPercent}%` }} className="bg-amber-500 h-full" />
                </div>
              </div>
            </div>

            {/* Output Display Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-navy-950 to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                  Estimated Monthly EMI
                </span>
                <div className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6">
                  {formatCurrency(monthlyEmi)}
                  <span className="text-xs text-slate-400 font-normal ml-1">/ month</span>
                </div>

                <div className="space-y-3.5 border-t border-slate-800 pt-5 text-sm">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Principal Amount</span>
                    <strong className="text-white">{formatCurrency(loanAmount)}</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Total Interest Payable</span>
                    <strong className="text-amber-400 text-base font-bold">
                      {formatCurrency(totalLoanInterest)}
                    </strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Total Payment (P + I)</span>
                    <strong className="text-white">{formatCurrency(totalLoanPayment)}</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Applied Interest Rate</span>
                    <strong className="text-emerald-400">{loanRate.toFixed(2)}% p.a.</strong>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={() => onOpenInquiry && onOpenInquiry(loanType === 'gold' ? 'gold-loan' : 'house-loan')}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl transition-all shadow-lg hover:shadow-emerald-600/20 flex items-center justify-center gap-2 text-sm"
                >
                  Apply For This Loan Scheme <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  ⚡ Gold loans processed in 30 mins with certified on-spot appraisal.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
