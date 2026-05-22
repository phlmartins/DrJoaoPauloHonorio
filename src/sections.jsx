// Page sections. Each is a small composable component used by App.

// ─── Header ──────────────────────────────────────────────────────────
function Header({ t }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={scrolled ? 'hdr scrolled' : 'hdr'}>
      <div className="container hdr-inner">
        <a className="hdr-brand" href="#top">
          <img src="assets/logo-jp.svg" alt="JP" />
          <span className="hdr-brand-text">
            <span className="hdr-brand-name">Dr. João Paulo Honório</span>
            <span className="hdr-brand-tag">Consultoria Jurídica</span>
          </span>
        </a>
        <nav className="hdr-nav">
          <a href="#areas">Áreas de atuação</a>
          <a href="#sobre">Sobre</a>
          <a href="#metodo">Método</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="hdr-cta" href="#contato">
          <span className="hdr-cta-label">Agendar consulta</span>
          <IconArrowRight />
        </a>
        <button className="menu-btn" aria-label="Menu">
          <IconMenu />
        </button>
      </div>
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────
function Hero({ t }) {
  return (
    <section className="hero" id="top">
      <div className="hero-monogram-bg" aria-hidden="true">
        <img src="assets/logo-jp.svg" alt="" />
      </div>
      <div className="hero-coord">
        <span>16°22′S</span>
        <span>49°35′W</span>
      </div>
      <div className="hero-ticker">
        <span>Av. Bernardo Sayão</span>
        <span className="dot" />
        <span>6324</span>
        <span className="dot" />
        <span>Centro</span>
        <span className="dot" />
        <span>Ceres — GO</span>
        <span className="dot" />
        <span>OAB/GO 77627</span>
      </div>
      <div className="container hero-content-bold">
        <div className="hero-eyebrow-row">
          <span className="eyebrow">Consultoria Jurídica</span>
          <span className="hero-year">Est. Ceres · GO</span>
        </div>
        <h1 className="display hero-h1-bold">
          <span className="hero-word w1">Cada</span>
          <span className="hero-word w2"><em>causa,</em></span>
          <span className="hero-word w3">uma</span>
          <span className="hero-word w4"><em>estratégia</em>.</span>
        </h1>
        <div className="hero-bottom">
          <p className="sub hero-sub-bold">
            Patrocínio jurídico estratégico em Trabalhista, Previdenciário,
            Tributário, Cível e Família e Sucessões — atendimento direto com
            o advogado responsável, do diagnóstico à decisão final.
          </p>
          <div className="hero-numeric">
            <div className="hero-numeric-item">
              <span className="num">05</span>
              <span className="lbl">áreas de<br />atuação</span>
            </div>
            <div className="hero-numeric-item">
              <span className="num">77 627</span>
              <span className="lbl">OAB / GO</span>
            </div>
            <div className="hero-numeric-item">
              <span className="num">24h</span>
              <span className="lbl">para retornar<br />sua mensagem</span>
            </div>
          </div>
        </div>
        <div className="hero-actions hero-actions-bold">
          <a className="btn btn-primary" href="#contato">
            Agendar consulta <IconArrowRight />
          </a>
          <a className="btn btn-ghost" href="#areas">
            Ver áreas <IconArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Marquee ─────────────────────────────────────────────────────────
function Marquee() {
  const items = [
    'Trabalhista', 'Previdenciária', 'Tributária', 'Família e Sucessões',
    'Consultoria estratégica', 'Atendimento direto com o advogado',
  ];
  // Duplicate for seamless loop
  const all = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {all.map((it, i) => (
          <div className="marquee-item" key={i}>
            <span className="dot" />
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Areas ───────────────────────────────────────────────────────────
const AREAS = [
  {
    icon: 'IconBriefcase',
    title: 'Trabalhista',
    description:
      'Defesa do trabalhador e do empregador. Reconhecimento de vínculo, horas extras, rescisão indireta, verbas rescisórias e acordos.',
  },
  {
    icon: 'IconShield',
    title: 'Previdenciária',
    description:
      'Aposentadoria, BPC/LOAS, auxílios e revisão de benefícios. Planejamento previdenciário antes do requerimento ao INSS.',
  },
  {
    icon: 'IconScales',
    title: 'Tributária',
    description:
      'Recuperação de créditos, defesa em execuções fiscais, parcelamentos e planejamento tributário para pessoas físicas e empresas.',
  },
  {
    icon: 'IconHearth',
    title: 'Família e Sucessões',
    description:
      'Divórcio, guarda, alimentos, inventário e testamento. Acompanhamento próximo em momentos sensíveis.',
  },
  {
    icon: 'IconGavel',
    title: 'Cível',
    description:
      'Contratos, responsabilidade civil, direito do consumidor, ações indenizatórias e demais demandas cíveis em geral.',
  },
];

function Areas() {
  const iconMap = {
    IconBriefcase, IconShield, IconScales, IconHearth, IconGavel,
  };
  return (
    <section className="section section-areas-bold" id="areas">
      <div className="container">
        <div className="section-counter">— Áreas de atuação / 05</div>
        <div className="section-head section-head-bold">
          <h2 className="display">
            <span>cinco</span><br />
            <em>frentes,</em><br />
            uma só<br />
            <em>prática.</em>
          </h2>
          <div className="right">
            <p className="sub">
              Atuação concentrada em áreas onde a estratégia importa tanto
              quanto a doutrina. Cada caso é estudado em profundidade — do
              diagnóstico inicial à sustentação oral, se necessário.
            </p>
          </div>
        </div>
      </div>
      <div className="areas-rail-wrap">
        <div className="areas-rail">
          {AREAS.map((a, i) => {
            const Icon = iconMap[a.icon];
            return (
              <article className="area-bold" key={a.title}>
                <div className="area-bold-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="area-bold-glyph"><Icon /></div>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
                <span className="area-bold-link">
                  Saber mais <IconArrowUpRight style={{ width: 12, height: 12 }} />
                </span>
              </article>
            );
          })}
          <div className="area-bold-end">
            <p>
              Outra demanda? Mande sua mensagem — analiso pessoalmente e
              respondo em até 24 horas.
            </p>
            <a className="btn btn-ghost" href="#contato">
              Falar comigo <IconArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────────
function About() {
  return (
    <section className="section about-section-bold" id="sobre">
      <div className="container">
        <div className="section-counter">— O escritório</div>
        <div className="about-bold">
          <div className="about-photo about-photo-bold">
            <img src="assets/escritorio.jpg" alt="Escritório Dr. João Paulo Honório" />
            <div className="about-stamp">
              <strong>5+</strong>
              anos de<br />advocacia
            </div>
            <div className="about-photo-cap">
              Escritório &middot;<br />Av. Bernardo Sayão, 6324<br />Ceres &mdash; GO
            </div>
          </div>
          <div className="about-text about-text-bold">
            <h2 className="display">
              Advocacia<br /><em>com presença.</em>
            </h2>
            <blockquote className="about-quote">
              <span className="quote-mark">&ldquo;</span>
              Uma carteira restrita de causas é uma escolha deliberada — é o
              que permite atender <em>cada</em> cliente diretamente.
            </blockquote>
            <p>
              Dr. João Paulo Honório da Silva é advogado inscrito na OAB/GO sob o
              número 77627, com atuação consultiva e contenciosa em áreas que
              tocam diretamente o dia a dia das pessoas e das empresas —
              trabalho, previdência, tributos, demandas cíveis e família.
            </p>
            <ul className="about-creds">
              <li><span className="dot" /> Atendimento direto, sem intermediação</li>
              <li><span className="dot" /> Estratégia documentada antes da movimentação</li>
              <li><span className="dot" /> Atualizações por WhatsApp em cada andamento</li>
              <li><span className="dot" /> Honorários transparentes, por escrito</li>
            </ul>
            <div className="about-signature">
              <span className="about-signature-name">J. P. Honório</span>
              <span className="about-signature-meta">
                Advogado<br />OAB/GO 77627
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Differentiators / Method ────────────────────────────────────────
const DIFFS = [
  {
    title: 'Atendimento personalizado',
    body: 'Você fala diretamente com o advogado responsável, do primeiro contato à sentença. Sem fila de espera, sem terceirização.',
  },
  {
    title: 'Transparência total',
    body: 'Honorários, prazos e estratégia definidos por escrito antes de qualquer movimentação. Você sabe exatamente onde está.',
  },
  {
    title: 'Tecnologia a serviço',
    body: 'Acompanhamento digital do andamento processual e canal direto no WhatsApp para dúvidas e atualizações em tempo real.',
  },
];
function Method() {
  return (
    <section className="section" id="metodo">
      <div className="container">
        <div className="section-counter">03 — Como atendemos</div>
        <div className="section-head">
          <h2 className="display">Método antes<br />de <em>movimentação.</em></h2>
          <div className="right">
            <p className="sub">
              O cuidado com o que vem antes do processo é o que diferencia uma
              causa bem conduzida. Por isso o trabalho começa pela escuta —
              e termina pelo resultado mais favorável possível.
            </p>
          </div>
        </div>
        <div className="diff-grid">
          {DIFFS.map((d, i) => (
            <div className="diff" key={d.title}>
              <div className="diff-num">{String(i + 1).padStart(2, '0')}</div>
              <h4>{d.title}</h4>
              <p>{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ────────────────────────────────────────────────────
const TESTIS = [
  {
    quote: 'Da primeira reunião à sentença, fui tratado como prioridade. Recebi atualizações por WhatsApp em cada andamento do processo.',
    name: 'Marcos R.',
    caseLabel: 'Aposentadoria por idade',
  },
  {
    quote: 'Resolvi um inventário familiar complicado com tranquilidade. Trouxe leveza para um momento difícil.',
    name: 'Ana P.',
    caseLabel: 'Inventário e partilha',
  },
  {
    quote: 'Recuperamos créditos tributários que nem sabíamos que tínhamos direito. Atendimento de outro nível.',
    name: 'L. C. — Comércio',
    caseLabel: 'Recuperação tributária',
  },
];
function Testimonials() {
  return (
    <section className="section" id="depoimentos">
      <div className="container">
        <div className="section-counter">04 — Histórias de clientes</div>
        <div className="section-head">
          <h2 className="display">Resultado<br />em <em>palavras de quem viveu.</em></h2>
          <div className="right">
            <p className="sub">
              Histórias reais de quem confiou seu caso a este escritório.
              Nomes resguardados quando o cliente assim preferiu.
            </p>
          </div>
        </div>
        <div className="testimonials">
          {TESTIS.map((t, i) => (
            <article className="testi" key={i}>
              <span className="testi-quote">"</span>
              <p>{t.quote}</p>
              <div className="testi-meta">
                <span className="testi-name">{t.name}</span>
                <span className="testi-case">{t.caseLabel}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ─────────────────────────────────────────────────────────
function nextWeekdays(n = 7) {
  const out = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  while (out.length < n) {
    d.setDate(d.getDate() + 1);
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) out.push(new Date(d));
  }
  return out;
}
const TIMES = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];
const MONTH_PT = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
const DOW_PT = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

function Contact() {
  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({
    name: '', email: '', phone: '', area: '', message: '',
    date: null, time: '',
  });
  const [submitted, setSubmitted] = React.useState(false);

  const days = React.useMemo(() => nextWeekdays(7), []);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const canStep2 = form.name.trim() && form.phone.trim();
  const canStep3 = canStep2 && form.area && form.message.trim();
  const canSubmit = canStep3 && form.date && form.time;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
  };

  return (
    <section className="section" id="contato">
      <div className="container">
        <div className="section-counter">05 — Fale com o escritório</div>
        <div className="contact">
          <div className="contact-info">
            <h2 className="display">
              Sua primeira<br />conversa <em>é gratuita.</em>
            </h2>
            <p className="sub">
              Conte o seu caso em poucas linhas. Em até 24 horas você recebe
              uma resposta com a leitura jurídica preliminar e os próximos
              passos sugeridos.
            </p>
            <dl className="contact-list">
              <a className="contact-item" href="https://wa.me/5562981132872" target="_blank" rel="noopener">
                <div className="contact-item-icon"><IconWhatsapp /></div>
                <div className="contact-item-body">
                  <dt>WhatsApp</dt>
                  <dd>(62) 98113-2872</dd>
                </div>
              </a>
              <a className="contact-item" href="mailto:adv.joaohonorio@gmail.com">
                <div className="contact-item-icon"><IconMail /></div>
                <div className="contact-item-body">
                  <dt>E-mail</dt>
                  <dd>adv.joaohonorio@gmail.com</dd>
                </div>
              </a>
              <a className="contact-item" href="https://instagram.com/jpconsultoriajuridica" target="_blank" rel="noopener">
                <div className="contact-item-icon"><IconInstagram /></div>
                <div className="contact-item-body">
                  <dt>Instagram</dt>
                  <dd>@jpconsultoriajuridica</dd>
                </div>
              </a>
              <a className="contact-item" href="https://maps.google.com/?q=Avenida+Bernardo+Say%C3%A3o+6324+Centro+Ceres+GO" target="_blank" rel="noopener">
                <div className="contact-item-icon"><IconPin /></div>
                <div className="contact-item-body">
                  <dt>Endereço</dt>
                  <dd>Av. Bernardo Sayão, 6324 — Centro<br />Ceres — GO &middot; CEP 76.300-188</dd>
                </div>
              </a>
              <div className="contact-item">
                <div className="contact-item-icon"><IconClock /></div>
                <div className="contact-item-body">
                  <dt>Atendimento</dt>
                  <dd>Segunda a sexta &middot; 08h–18h<br />Com hora marcada</dd>
                </div>
              </div>
            </dl>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon"><IconCheck /></div>
                <h3>Consulta agendada.</h3>
                <p>
                  Obrigado, {form.name.split(' ')[0]}. Sua consulta sobre <strong style={{color:'var(--gold)'}}>{form.area}</strong> foi reservada para
                  {' '}<strong style={{color:'var(--cream)'}}>{form.date && `${DOW_PT[form.date.getDay()]}, ${form.date.getDate()} ${MONTH_PT[form.date.getMonth()]} · ${form.time}`}</strong>.
                  Em até 24 horas você recebe a confirmação no WhatsApp.
                </p>
                <button type="button" className="btn btn-ghost" onClick={() => { setSubmitted(false); setStep(1); setForm({ name:'', email:'', phone:'', area:'', message:'', date:null, time:'' }); }}>
                  Agendar outra consulta
                </button>
              </div>
            ) : (
              <>
                <div className="contact-form-head">
                  <h3>Agendar consulta</h3>
                  <span className="contact-form-step">Etapa {step} de 3</span>
                </div>

                {step === 1 && (
                  <>
                    <div className="field">
                      <label htmlFor="name">Nome completo</label>
                      <input id="name" type="text" value={form.name} onChange={set('name')} placeholder="Como devemos te chamar?" />
                    </div>
                    <div className="field-row">
                      <div className="field">
                        <label htmlFor="phone">WhatsApp</label>
                        <input id="phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="(00) 00000-0000" />
                      </div>
                      <div className="field">
                        <label htmlFor="email">E-mail (opcional)</label>
                        <input id="email" type="email" value={form.email} onChange={set('email')} placeholder="voce@email.com" />
                      </div>
                    </div>
                    <button type="button" className="btn btn-primary" disabled={!canStep2} style={{opacity: canStep2 ? 1 : 0.5}} onClick={() => setStep(2)}>
                      Continuar <IconArrowRight />
                    </button>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="field">
                      <label>Sobre qual área?</label>
                      <div className="area-pills">
                        {AREAS.map((a) => (
                          <button
                            key={a.title}
                            type="button"
                            className={form.area === a.title ? 'area-pill active' : 'area-pill'}
                            onClick={() => setForm((f) => ({ ...f, area: a.title }))}
                          >
                            {a.title}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="field">
                      <label htmlFor="msg">Conte o seu caso</label>
                      <textarea id="msg" value={form.message} onChange={set('message')} placeholder="O que aconteceu? Há prazos ou documentos importantes?" />
                    </div>
                    <div style={{display:'flex', gap:12, marginTop:6}}>
                      <button type="button" className="btn btn-ghost" onClick={() => setStep(1)} style={{flex:'none'}}>
                        Voltar
                      </button>
                      <button type="button" className="btn btn-primary" disabled={!canStep3} style={{opacity: canStep3 ? 1 : 0.5, flex:1, justifyContent:'center'}} onClick={() => setStep(3)}>
                        Continuar <IconArrowRight />
                      </button>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div className="field">
                      <label>Escolha um dia</label>
                      <div className="date-grid">
                        {days.map((d) => {
                          const isSel = form.date && d.toDateString() === form.date.toDateString();
                          return (
                            <button
                              type="button"
                              key={d.toISOString()}
                              className={isSel ? 'date-chip active' : 'date-chip'}
                              onClick={() => setForm((f) => ({ ...f, date: d }))}
                            >
                              <span className="date-chip-dow">{DOW_PT[d.getDay()]}</span>
                              <span className="date-chip-day">{d.getDate()}</span>
                              <span className="date-chip-mon">{MONTH_PT[d.getMonth()]}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div className="field">
                      <label>Horário disponível</label>
                      <div className="time-grid">
                        {TIMES.map((tm) => (
                          <button
                            type="button"
                            key={tm}
                            className={form.time === tm ? 'time-chip active' : 'time-chip'}
                            onClick={() => setForm((f) => ({ ...f, time: tm }))}
                          >
                            {tm}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div style={{display:'flex', gap:12, marginTop:6}}>
                      <button type="button" className="btn btn-ghost" onClick={() => setStep(2)} style={{flex:'none'}}>
                        Voltar
                      </button>
                      <button type="submit" className="btn btn-primary" disabled={!canSubmit} style={{opacity: canSubmit ? 1 : 0.5, flex:1, justifyContent:'center'}}>
                        Confirmar consulta <IconArrowRight />
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

// ─── Map ─────────────────────────────────────────────────────────────
function MapSection() {
  return (
    <section className="map-section" id="endereco">
      <div className="map-overlay">
        <div className="container">
          <div className="map-card">
            <span className="eyebrow">Visite o escritório</span>
            <h3 className="display">Centro de Ceres &mdash; GO</h3>
            <p>
              Av. Bernardo Sayão, n° 6324<br />
              Centro &middot; Ceres &mdash; Goiás<br />
              CEP 76.300-188
            </p>
            <a className="btn btn-primary" href="https://maps.google.com/?q=Avenida+Bernardo+Say%C3%A3o+6324+Centro+Ceres+GO" target="_blank" rel="noopener">
              Abrir no Google Maps <IconArrowUpRight />
            </a>
          </div>
        </div>
      </div>
      <iframe
        title="Mapa do escritório"
        className="map-iframe"
        src="https://maps.google.com/maps?q=Avenida%20Bernardo%20Say%C3%A3o%206324%20Centro%20Ceres%20GO&t=&z=15&ie=UTF8&iwloc=&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="assets/logo-jp.svg" alt="JP" />
            <span className="footer-brand-name">Dr. João Paulo Honório</span>
            <span className="footer-brand-tag">Consultoria Jurídica</span>
            <p>
              Atuação personalizada em Direito Trabalhista, Previdenciário,
              Tributário, Cível e Família e Sucessões. Ceres — GO &amp; online.
            </p>
          </div>
          <div className="footer-col">
            <h5>Áreas</h5>
            <ul>
              {AREAS.map((a) => <li key={a.title}><a href="#areas">{a.title}</a></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Escritório</h5>
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#metodo">Método</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contato</h5>
            <ul>
              <li>(62) 98113-2872</li>
              <li>adv.joaohonorio@gmail.com</li>
              <li>@jpconsultoriajuridica</li>
              <li>Av. Bernardo Sayão, 6324<br />Centro, Ceres — GO</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Dr. João Paulo Honório da Silva. Todos os direitos reservados.</span>
          <span className="oab">OAB/GO 77627</span>
        </div>
      </div>
    </footer>
  );
}

// ─── Floating WhatsApp ───────────────────────────────────────────────
function WhatsappFloat() {
  return (
    <a className="wpp" href="https://wa.me/5562981132872?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener">
      <IconWhatsapp />
      <span className="wpp-label">Fale no WhatsApp</span>
    </a>
  );
}

Object.assign(window, {
  Header, Hero, Marquee, Areas, About, Method, Testimonials, Contact, MapSection, Footer, WhatsappFloat,
});
