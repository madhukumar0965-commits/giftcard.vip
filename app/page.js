export default function Home() {
  const faqs = [
    {
      id: "faq-1",
      count: "01",
      question: "What is GiftCardMall/MyGift?",
      answer:
        "GiftCardMall/MyGift is a search phrase commonly used by people looking for the card-management instructions associated with certain prepaid gift cards. Check the exact website and customer-service number printed on your own card because different cards may use different services.",
    },
    {
      id: "faq-2",
      count: "02",
      question: "How do I check my GiftCardMall MyGift card balance?",
      answer:
        "Find the web address or phone number on the back of your gift card, verify the address carefully, and follow the issuer’s balance-check instructions. If your card says www.giftcardmall.com/mygift, type that address directly and verify any redirect before entering card details. This independent guide cannot display your balance.",
    },
    {
      id: "faq-3",
      count: "03",
      question: "Is this the official www.giftcardmall.com/mygift website?",
      answer:
        "No. Giftcare.vip is an independent educational guide. It is not operated by GiftCardMall, a card issuer, Visa, Mastercard, or any bank. We do not activate cards, process transactions, or collect card numbers, PINs, security codes, or expiration dates.",
    },
    {
      id: "faq-4",
      count: "04",
      question: "What does giftcardmall/mygift mean, and is it a complete URL?",
      answer:
        "The phrase giftcardmall/mygift is a common search shorthand, not a complete web address on its own. Some cards or packaging reference www.giftcardmall.com/mygift. Always rely on the full address printed on your particular card and inspect the final website domain before using it.",
    },
    {
      id: "faq-5",
      count: "05",
      question: "How do I activate a Visa or Mastercard gift card?",
      answer:
        "Check the packaging and the back of the card for activation instructions. Some prepaid gift cards are activated at purchase, while others require a separate step. Use only the card issuer’s verified website or support number; this page cannot activate a gift card.",
    },
    {
      id: "faq-6",
      count: "06",
      question: "Where can I see gift card transactions and pending charges?",
      answer:
        "A card issuer’s verified balance portal may show recent transactions, pending authorizations, and available funds. If something looks unfamiliar or a transaction is missing, call the number printed on the back of the card and keep your purchase receipt.",
    },
    {
      id: "faq-7",
      count: "07",
      question: "Why is my prepaid Visa gift card balance lower than expected?",
      answer:
        "Pending merchant authorizations, purchases, refunds that have not posted, or card-specific fees may affect available funds. Review the card terms and the issuer’s transaction history. The displayed available balance may differ from the sum of settled transactions.",
    },
    {
      id: "faq-8",
      count: "08",
      question: "Why was my GiftCardMall gift card declined?",
      answer:
        "A card can be declined because of insufficient available funds, a temporary hold, a merchant restriction, an address-verification issue, or an activation problem. Verify your balance and card terms, then contact the support number printed on your card if the issue continues.",
    },
    {
      id: "faq-9",
      count: "09",
      question: "What if www.giftcardmall.com/mygift does not open?",
      answer:
        "Double-check the spelling on the card and try the customer-service phone number on the back. Older addresses may redirect to a different service. Do not assume a search advertisement or similarly; verify the destination with the card issuer before sharing card details.",
    },
    {
      id: "faq-10",
      count: "10",
      question: "Can I check a Mastercard gift card balance on this page?",
      answer:
        "No. This site is a general informational guide for gift card balance checks and troubleshooting, not a live Visa or Mastercard balance checker. Use the issuer website or phone number shown on the specific card.",
    },
    {
      id: "faq-11",
      count: "11",
      question: "How do I avoid a fake gift card balance checker?",
      answer:
        "Type the address printed on your card instead of following unknown ads, check the complete domain before entering information, and never provide a PIN or security code to an unverified website, message, or caller. Report suspicious charges promptly to the issuer.",
    },
  ];

  const searchTags = [
    "giftcardmall/mygift",
    "www.giftcardmall.com/mygift",
    "giftcardmall mygift balance",
    "giftcardmall balance check",
    "mygift card balance check",
    "check Visa gift card balance",
    "Mastercard gift card balance",
    "prepaid gift card balance online",
    "gift card activation help",
    "gift card transaction history",
    "Visa gift card declined",
    "gift card pending transaction",
  ];

  return (
    <>
      <a className="skip" href="#main">
        Skip to main content
      </a>

      <div className="disclosure">
        <b>INDEPENDENT INFORMATIONAL WEBSITE</b> · Not affiliated with
        GiftCardMall or any card issuer · We never request card details
      </div>

      <header className="site-header" id="top">
        <nav className="nav wrap" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Giftcare.vip guide home">
            <span className="brand-mark" aria-hidden="true">
              ✳
            </span>
            <span className="brand-type">
              <strong>
                Giftcare<span style={{ color: "#d86443" }}>.</span>
              </strong>
              <small>giftcare.vip</small>
            </span>
          </a>
          <div className="nav-links">
            <a href="#balance-guide">Balance guide</a>
            <a href="#troubleshooting">Card help</a>
            <a href="#faq">FAQs</a>
            <a className="nav-cta" href="#safety">
              Protect your card ↗
            </a>
          </div>
        </nav>
      </header>

      <main id="main">
        {/* HERO SECTION */}
        <section className="hero" aria-labelledby="main-title">
          <div className="wrap hero-inner">
            <div>
              <span className="eyebrow">CARDHOLDER FIELD GUIDE / 2026</span>
              <h1 id="main-title">
                Know your balance.
                <br />
                <em>Skip the guesswork.</em>
              </h1>
              <p className="hero-lede">
                Looking for <strong>giftcardmall/mygift</strong> or{" "}
                <strong>www.giftcardmall.com/mygift</strong>? This independent
                guide explains how to find your card&apos;s                 balance-check service, understand available funds, and solve
                common prepaid gift card issues.
              </p>
              <div className="actions">
                <a className="btn btn-dark" href="#balance-guide">
                  Learn how to check <span aria-hidden="true">↗</span>
                </a>
                <a className="btn btn-outline" href="#faq">
                  Explore answers <span aria-hidden="true">↓</span>
                </a>
                <a className="btn btn-outline" href="https://giftcare.vip/">
                  Visit Giftcare.vip <span aria-hidden="true">↗</span>
                </a>
              </div>
              <p className="hero-footnote">
                We do not provide live balance lookups or ask for card numbers,
                PINs, expiration dates, or CVVs.
              </p>
              <div className="hero-proof">
                <span>
                  <i className="check" aria-hidden="true">
                    ✓
                  </i>{" "}
                  No account required
                </span>
                <span>
                  <i className="check" aria-hidden="true">
                    ✓
                  </i>{" "}
                  No card details collected
                </span>
                <span>
                  <i className="check" aria-hidden="true">
                    ✓
                  </i>{" "}
                  Easy-to-follow guide
                </span>
              </div>
            </div>

            <div
              className="visual"
              aria-label="Illustration of a prepaid gift card; not an actual balance checker"
              role="img"
            >
              <div className="orbit"></div>
              <div className="mockcard" aria-hidden="true">
                <div className="mockcard-top">
                  <span>FIELDNOTES / GUIDE</span>
                  <span className="mockcard-stamp">EDUCATIONAL ONLY</span>
                </div>
                <div className="mockcard-middle">
                  <span>Available balance</span>
                  <strong>— —</strong>
                </div>
                <div className="mockcard-bottom">
                  <small>
                    NOT A LIVE BALANCE CHECK
                    <br />
                    VERIFY WITH YOUR CARD ISSUER
                  </small>
                  <span className="signal">
                    <i></i>
                    <i></i>
                    <i></i>
                  </span>
                </div>
              </div>
              <div className="float-note note-a" aria-hidden="true">
                <small>RULE NO. 01</small>
                <b>Use the address printed on your card.</b>
              </div>
              <div className="float-note note-b" aria-hidden="true">
                <small>
                  <span className="dot"></span>QUICK REMINDER
                </small>
                <b>Check the full domain before entering card details.</b>
              </div>
            </div>
          </div>
        </section>

        {/* KEYWORD STRIP */}
        <div className="keyword-strip" aria-label="Topics covered">
          <div className="wrap inner">
            <span>Balance checks</span>
            <span>Card activation</span>
            <span>Transaction history</span>
            <span>Safer browsing</span>
          </div>
        </div>

        {/* 01 / THE BASICS (BALANCE GUIDE) */}
        <section className="section" id="balance-guide" aria-labelledby="how-title">
          <div className="wrap">
            <div className="section-intro">
              <div>
                <div className="eyebrow label">01 / THE BASICS</div>
                <h2 id="how-title">How to check your GiftCardMall/MyGift balance</h2>
              </div>
              <p>
                Before entering payment-card details online, find and verify the
                card-specific destination. The process begins on the physical
                card—not on an unfamiliar website.
              </p>
            </div>
            <div className="steps-grid">
              <article className="step-card" id="step-1">
                <span className="step-number">01</span>
                <h3>Read the card</h3>
                <p>
                  Find the balance website and customer-service phone number
                  printed on the back or on the original card packaging. Keep
                  the card in hand.
                </p>
                <div className="step-icon">
                  First, locate the source{" "}
                  <span className="arrow-icon" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </article>
              <article className="step-card" id="step-2">
                <span className="step-number">02</span>
                <h3>Verify the address</h3>
                <p>
                  If your card says <strong>www.giftcardmall.com/mygift</strong>,
                  type the full address carefully. Website redirects can change;
                  inspect the final domain and confirm it with the issuer if
                  uncertain.
                </p>
                <div className="step-icon">
                  Next, confirm the URL{" "}
                  <span className="arrow-icon" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </article>
              <article className="step-card" id="step-3">
                <span className="step-number">03</span>
                <h3>Review your funds</h3>
                <p>
                  Use the verified issuer&apos;s service to check available balance
                  and recent activity. Save receipts and ask the issuer about
                  unfamiliar transactions.
                </p>
                <div className="step-icon">
                  Then, review activity{" "}
                  <span className="arrow-icon" aria-hidden="true">
                    ↗
                  </span>
                </div>
              </article>
            </div>
            <p className="micro-copy">
              Searching for <strong>giftcardmall/mygift balance check</strong>,{" "}
              <strong>MyGift Visa gift card balance</strong>, or{" "}
              <strong>check GiftCardMall balance</strong>? These three steps are a
              safe place to begin.
            </p>
          </div>
        </section>

        {/* 02 / SECURITY FIRST */}
        <section
          className="section dark-section"
          id="safety"
          aria-labelledby="safety-title"
        >
          <div className="wrap dark-inner">
            <div>
              <div className="eyebrow">02 / SECURITY FIRST</div>
              <h2 id="safety-title">
                Your card details should stay <em>yours.</em>
              </h2>
              <p>
                Searching for www.giftcardmall.com/mygift or a prepaid Visa gift
                card balance can surface unrelated websites. This page is a
                reading resource, not an issuer portal or balance checker.
              </p>
              <p>
                For any live GiftCardMall/MyGift balance request, use the
                verified address or support number printed on the card. If a
                page looks unfamiliar, confirm the destination with the issuer
                before continuing.
              </p>
              <a
                className="btn btn-lime"
                href="https://www.giftcards.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open the GiftCardMall MyGift address in a new tab; verify the final URL before entering card details"
              >
                Open giftcardmall.com/mygift <span aria-hidden="true">↗</span>
              </a>
              <p style={{ fontSize: "12px", marginTop: "13px" }}>
                External link. This legacy address may redirect. Always verify
                the final destination against issuer guidance.
              </p>
            </div>
            <div className="safety-list">
              <div className="safety-row">
                <span className="safety-icon" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <b>Read every character of the URL</b>
                  <p>
                    Look for extra words, unexpected subdomains, or a
                    destination different from your card&apos;s instructions.
                  </p>
                </div>
              </div>
              <div className="safety-row">
                <span className="safety-icon" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <b>Keep sensitive card information off this page</b>
                  <p>
                    We never request a full card number, security code, PIN,
                    expiration date, or payment information.
                  </p>
                </div>
              </div>
              <div className="safety-row">
                <span className="safety-icon" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <b>Use the issuer&apos;s phone number for questions</b>
                  <p>
                    Unrecognized charges, damaged cards, or activation issues
                    require assistance from the card provider.
                  </p>
                </div>
              </div>
              <div className="safety-row">
                <span className="safety-icon" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <b>Remember: a search result is not proof</b>
                  <p>
                    Paid listings and lookalike domains may appear for
                    GiftCardMall MyGift balance-related searches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 / UNDERSTAND THE NUMBERS (TROUBLESHOOTING) */}
        <section
          className="section"
          id="troubleshooting"
          aria-labelledby="understanding-title"
        >
          <div className="wrap">
            <div className="two-col-intro">
              <div>
                <div className="eyebrow">03 / UNDERSTAND THE NUMBERS</div>
                <h2 id="understanding-title">
                  A gift card balance tells only part of the story.
                </h2>
              </div>
              <p>
                Whether you are checking a Visa gift card balance, Mastercard
                gift card balance, or another prepaid card, purchases and
                pending activity may affect the amount available to spend.
              </p>
            </div>
            <div className="topics">
              <article className="topic">
                <span className="glyph" aria-hidden="true">
                  ↗
                </span>
                <h3>Available balance</h3>
                <p>
                  The amount the issuer currently shows as usable. It may change
                  after purchases, reversals, or pending holds.
                </p>
              </article>
              <article className="topic">
                <span className="glyph" aria-hidden="true">
                  ◷
                </span>
                <h3>Pending charges</h3>
                <p>
                  Gas stations, hotels, and some online merchants may place
                  temporary authorizations that reduce available funds.
                </p>
              </article>
              <article className="topic">
                <span className="glyph" aria-hidden="true">
                  ✳
                </span>
                <h3>Card activation</h3>
                <p>
                  Activation steps depend on the card program. Check the original
                  packaging or contact your card issuer.
                </p>
              </article>
              <article className="topic">
                <span className="glyph" aria-hidden="true">
                  ↺
                </span>
                <h3>Refunds &amp; returns</h3>
                <p>
                  Returned money may take time to post. Keep receipts and consult
                  the issuer for transaction-specific timing.
                </p>
              </article>
            </div>
            <div className="help-panel">
              <div className="help-heading">
                <div className="eyebrow">PROBLEM SOLVER</div>
                <h3>Card not working?</h3>
                <p>
                  These common causes can explain why a GiftCardMall gift card
                  is declined even when funds appear to remain.
                </p>
              </div>
              <div
                className="help-table"
                role="table"
                aria-label="Gift card troubleshooting guide"
              >
                <div className="help-row" role="row">
                  <strong role="cell">Payment declined</strong>
                  <span role="cell">
                    Check the available balance, merchant acceptance, and any
                    temporary holds.
                  </span>
                </div>
                <div className="help-row" role="row">
                  <strong role="cell">Online checkout fails</strong>
                  <span role="cell">
                    Review the card&apos;s billing-address and online-use
                    instructions with the issuer.
                  </span>
                </div>
                <div className="help-row" role="row">
                  <strong role="cell">Balance seems incorrect</strong>
                  <span role="cell">
                    Review transaction history, pending authorizations, posted
                    refunds, and card terms.
                  </span>
                </div>
                <div className="help-row" role="row">
                  <strong role="cell">Website will not load</strong>
                  <span role="cell">
                    Recheck the URL printed on the card and use its official
                    phone support channel.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 / FAQS */}
        <section className="section faq-section" id="faq" aria-labelledby="faq-title">
          <div className="wrap">
            <div className="faq-head">
              <div>
                <div className="eyebrow">04 / GOOD QUESTIONS</div>
                <h2 id="faq-title">GiftCardMall/MyGift FAQs</h2>
              </div>
              <p>
                Answers to common searches about www.giftcardmall.com/mygift
                balance checks, MyGift activation, prepaid card transactions,
                and card safety.
              </p>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.id} className="faq-item" id={faq.id}>
                  <summary>
                    <span className="faq-count">{faq.count}</span>
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 05 / SEARCH PHRASES EXPLAINED */}
        <section
          className="search-section"
          id="search-terms"
          aria-labelledby="search-title"
        >
          <div className="wrap search-grid">
            <div>
              <div className="eyebrow">05 / SEARCH PHRASES EXPLAINED</div>
              <h2 id="search-title">Different searches. The same first step.</h2>
              <p>
                People use many terms to find prepaid gift card help. These
                related topics are covered in this guide—not separate
                balance-check services on this website. We do not publish
                unverified keyword volume estimates.
              </p>
            </div>
            <div className="tag-collection" aria-label="Related balance topics">
              {searchTags.map((tag, idx) => (
                <span key={idx} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="bottom-cta" aria-labelledby="last-title">
          <div className="wrap">
            <div className="bottom-box">
              <div>
                <div className="eyebrow">A FINAL REMINDER</div>
                <h2 id="last-title">The safest source is the card itself.</h2>
                <p>
                  Check your card&apos;s printed URL or phone number before making
                  any balance inquiry.
                </p>
              </div>
              <a className="btn btn-dark" href="#balance-guide">
                Revisit the three steps <span aria-hidden="true">↑</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="footer-main">
            <div>
              <a className="brand" href="#top">
                <span className="brand-mark" aria-hidden="true">
                  ✳
                </span>
                <span className="brand-type">
                  <strong>Giftcare.</strong>
                  <small>giftcare.vip</small>
                </span>
              </a>
              <p>
                Independent education about prepaid gift card balances,
                GiftCardMall/MyGift search terms, and safe cardholder practices.
                No accounts, transactions, or balance checks are provided here.
              </p>
            </div>
            <div>
              <h3>Browse</h3>
              <a href="#balance-guide">Balance walkthrough</a>
              <a href="#troubleshooting">Common problems</a>
              <a href="#faq">Frequently asked questions</a>
              <a href="#search-terms">Related search terms</a>
            </div>
            <div>
              <h3>Important disclosure</h3>
              <p>
                Giftcare.vip is not affiliated with, sponsored by, or
                endorsed by GiftCardMall, Blackhawk Network, Visa, Mastercard, or
                a card issuer. All trademarks belong to their respective owners.
                Always contact your issuer for account-specific help.
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © 2026 Giftcare.vip · Independent informational resource ·
              Updated October 18, 2026
            </span>
            <a className="back-top" href="#top">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
