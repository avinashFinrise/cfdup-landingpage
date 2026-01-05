"use client"

import { motion } from "framer-motion"

function RuleCard({
  title,
  children,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card/40 border border-border/50 rounded-2xl p-8 backdrop-blur-sm"
    >
      <h3 className="font-poppins font-semibold text-xl mb-4">
        {title}
      </h3>
      <div className="text-muted-foreground leading-relaxed">
        {children}
      </div>
    </motion.div>
  )
}

function SubCard({
  title,
  children,
}) {
  return (
    <div className="bg-background/40 border border-border/40 rounded-xl p-2">
      <h4 className="font-semibold mb-3">{title}</h4>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  )
}




export default function TradingGuidelines() {
  return (
    <section className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-pattern" />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/85 to-secondary/30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-poppins font-bold text-4xl mb-4">
            FundedReady Trading Guidelines
          </h2>
          <p className="text-muted-foreground max-w-4xl leading-relaxed">
            At FundedReady, our mission is to empower traders by providing a
            structured and disciplined trading environment. Our guidelines are
            designed to promote responsible trading practices, protect capital,
            and foster long-term success.
          </p>
        </motion.div>

        <div className="space-y-5">
          {/* 1. Profit Objectives */}
          <RuleCard title="1. Profit Objectives">
            <ul className="list-disc pl-5 space-y-2">
              <li>For Step 1: <strong>10%</strong></li>
              <li>For Step 2: <strong>P1 – 8% &amp; P2 – 5%</strong></li>
              <li>
                <strong>No Time Constraints:</strong> There is no time limit to
                reach the profit target; focus on consistent performance.
              </li>
            </ul>
          </RuleCard>

          {/* 2. Risk Management */}
          <RuleCard title="2. Risk Management Parameters">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SubCard title="Step 1">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Daily Loss Limit:</strong> Losses must not exceed 3%
                    of the previous day’s closing balance, including realized
                    profits.
                  </li>
                  <li>
                    <strong>Maximum Drawdown:</strong> Capped at 6% of the
                    highest account balance achieved.
                  </li>
                </ul>
              </SubCard>

              <SubCard title="Step 2">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Daily Loss Limit:</strong> Losses must not exceed 5%
                    of the previous day’s closing balance, including realized
                    profits.
                  </li>
                  <li>
                    <strong>Maximum Drawdown:</strong> Capped at 10% of the
                    highest account balance achieved.
                  </li>
                </ul>
              </SubCard>
            </div>
          </RuleCard>

          {/* 3. Trading Activity */}
          <RuleCard title="3. Trading Activity Requirements">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Minimum Trading Days:</strong> At least 3 separate
                profitable trading days are required.
              </li>
              <li>
                <strong>Trade Distribution:</strong> Maximum profit per trade is
                limited to 4%.
              </li>
            </ul>
          </RuleCard>

          {/* 4. Leverage */}
          <RuleCard title="4. Leverage Provisions">
            <ul className="list-disc pl-5 space-y-2">
              <li>Forex, Metals, Indices, Energies: Leverage up to 1:100</li>
              <li>Crypto: Leverage up to 1:50</li>
            </ul>
          </RuleCard>

          {/* 5. Flexibility */}
          <RuleCard title="5. Trading Flexibility">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Holding Positions:</strong> Trades may be held overnight
                and over weekends without restrictions.
              </li>
              <li>
                <strong>News Trading:</strong> Trading during news events is
                permitted; caution is advised due to volatility.
              </li>
            </ul>
          </RuleCard>

          {/* 6. Hedging */}
          <RuleCard title="6. Hedging Policies">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Opening simultaneous buy and sell positions on the same
                instrument within a single account is prohibited.
              </li>
              <li>
                Executing opposing trades on the same instrument across multiple
                accounts under the same user is not allowed.
              </li>
              <li>Performing arbitrage of any kind is prohibited.</li>
            </ul>
          </RuleCard>

          {/* 7. Inactivity */}
          <RuleCard title="7. Inactivity Clause">
            <p>
              Accounts inactive for <strong>30 consecutive days</strong> will be
              disabled.
            </p>
          </RuleCard>

          {/* 8. Profit Sharing */}
          <RuleCard title="8. Profit Sharing Structure">
            <ul className="list-disc pl-5 space-y-2">
              <li>First Month: Receive 90% of your profits</li>
              <li>Second Month: Receive 95% of your profits</li>
              <li>Third Month Onwards: Receive 100% of your profits</li>
              <li>
                <strong>Payout Eligibility:</strong> Minimum profit of 1% of
                account size required to request a payout.
              </li>
            </ul>
          </RuleCard>

          {/* 9. Compliance */}
          <RuleCard title="9. Compliance and Violations">
            <ul className="list-disc pl-5 space-y-2">
              <li>Strict compliance with all trading guidelines is mandatory.</li>
              <li>
                Breaching any rule may result in immediate suspension and
                permanent termination of the account.
              </li>
            </ul>
          </RuleCard>

          {/* Closing */}
          <p className="text-sm text-muted-foreground max-w-4xl">
            By adhering to these guidelines, you contribute to a fair and secure
            trading environment for all FundedReady participants. We are
            committed to supporting your trading journey and celebrating your
            successes.
          </p>
        </div>
      </div>
    </section>
  )
}

