import { useEffect, useState } from 'react';
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBriefcase,
  IconClock,
  IconGavel,
  IconHearth,
  IconInstagram,
  IconMail,
  IconMenu,
  IconPin,
  IconScales,
  IconShield,
  IconWhatsapp,
} from './icons.jsx';

const WHATSAPP_URL =
  'https://wa.me/5562981132872?text=Ol%C3%A1%20Dr.%20Jo%C3%A3o%20Paulo%2C%20gostaria%20de%20agendar%20uma%20consulta';
const INSTAGRAM_URL = 'https://www.instagram.com/joaohonorio.adv/';
const INSTAGRAM_POST_URL = 'https://www.instagram.com/p/DZIpksPJvR9/';
const LOGO_MARK_SRC = '/assets/logo-monogram.png';

const NAV_LINKS = [
  { href: '#areas', label: 'Áreas' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#metodo', label: 'Atendimento' },
  { href: '#contato', label: 'Contato' },
];

const AREAS = [
  {
    icon: IconBriefcase,
    title: 'Trabalhista',
    description:
      'Defesa do trabalhador e do empregador. Vínculos, verbas rescisórias, horas extras e acordos.',
  },
  {
    icon: IconShield,
    title: 'Previdenciária',
    description:
      'Aposentadoria, BPC/LOAS, auxílios e revisão de benefícios junto ao INSS.',
  },
  {
    icon: IconScales,
    title: 'Tributária',
    description:
      'Recuperação de créditos, execuções fiscais, parcelamentos e planejamento tributário.',
  },
  {
    icon: IconHearth,
    title: 'Família e Sucessões',
    description:
      'Divórcio, guarda, alimentos, inventário e testamento.',
  },
  {
    icon: IconGavel,
    title: 'Cível',
    description:
      'Contratos, responsabilidade civil, consumidor e ações indenizatórias.',
  },
];

const STEPS = [
  {
    title: 'Escuta e diagnóstico',
    body: 'Você conta o caso e recebe uma leitura jurídica preliminar, com clareza sobre caminhos possíveis.',
  },
  {
    title: 'Estratégia por escrito',
    body: 'Honorários, prazos e próximos passos definidos antes de qualquer movimentação.',
  },
  {
    title: 'Acompanhamento direto',
    body: 'Atendimento com o advogado responsável e retorno por WhatsApp a cada andamento relevante.',
  },
];

const TESTIS = [
  {
    quote: 'Fui tratado como prioridade do início ao fim, com retorno em cada etapa do processo.',
    name: 'Marcos R.',
    caseLabel: 'Aposentadoria por idade',
  },
  {
    quote: 'Conduziu nosso inventário com calma e transparência em um momento difícil para a família.',
    name: 'Ana P.',
    caseLabel: 'Inventário e partilha',
  },
  {
    quote: 'Encontramos créditos tributários que desconhecíamos. Atendimento sério e objetivo.',
    name: 'L. C.',
    caseLabel: 'Recuperação tributária',
  },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={scrolled || open ? 'site-header is-scrolled' : 'site-header'}>
      <div className="container site-header__inner">
        <a className="site-brand" href="#top" onClick={close}>
          <span className="site-brand__mark-wrap">
            <img
              src={LOGO_MARK_SRC}
              alt=""
              className="site-brand__mark"
              width={503}
              height={787}
            />
          </span>
          <span className="site-brand__text">
            <span className="site-brand__name">Dr. João Paulo Honório</span>
            <span className="site-brand__tag">Consultoria Jurídica</span>
          </span>
        </a>
        <nav className="site-nav" aria-label="Principal">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <a className="btn btn--outline site-header__cta" href="#contato">
          Agendar consulta
        </a>
        <button
          type="button"
          className="site-menu-btn"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <IconMenu />
        </button>
      </div>
      {open && (
        <nav className="site-nav-mobile" aria-label="Menu mobile">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <a className="btn btn--primary" href="#contato" onClick={close}>
            Agendar consulta
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="kicker">Ceres — GO · OAB/GO 77627</p>
          <h1 className="hero__title">
            Consultoria jurídica com atendimento direto e estratégia clara.
          </h1>
          <p className="hero__lead">
            Atuação em Trabalhista, Previdenciário, Tributário, Cível e Família
            e Sucessões. Você fala com o advogado responsável — do primeiro
            contato à condução do caso.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#contato">
              Agendar consulta <IconArrowRight />
            </a>
            <a className="btn btn--ghost" href="#areas">
              Ver áreas de atuação
            </a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>Endereço</dt>
              <dd>Av. Bernardo Sayão, 6324 — Ceres/GO</dd>
            </div>
            <div>
              <dt>Retorno</dt>
              <dd>Até 24 horas úteis</dd>
            </div>
            <div>
              <dt>WhatsApp</dt>
              <dd>(62) 98113-2872</dd>
            </div>
          </dl>
        </div>
        <aside className="hero__portrait" aria-label="Dr. João Paulo Honório">
          <figure className="portrait-card">
            <div className="portrait-card__frame">
              <img
                src="/assets/dr-joao-paulo.jpg"
                alt="Dr. João Paulo Honório da Silva — Advogado, OAB/GO 77627"
                width={480}
                height={480}
              />
            </div>
            <figcaption className="portrait-card__caption">
              <strong>João Paulo Honório da Silva</strong>
              <span>Advogado · Consultoria Jurídica</span>
              <em>OAB/GO 77627</em>
            </figcaption>
          </figure>
          <a
            className="portrait-card__link"
            href={INSTAGRAM_POST_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon-pulse icon-pulse--inline icon-pulse--instagram">
              <IconInstagram />
            </span>
            Siga @joaohonorio.adv
          </a>
        </aside>
      </div>
    </section>
  );
}

function SectionIntro({ kicker, title, children }) {
  return (
    <header className="section-intro">
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 className="section-intro__title">{title}</h2>
      {children && <p className="section-intro__lead">{children}</p>}
    </header>
  );
}

function Areas() {
  return (
    <section className="section section--soft" id="areas">
      <div className="container">
        <SectionIntro
          kicker="Áreas de atuação"
          title="Cinco frentes de prática jurídica"
        >
          Atuação concentrada em demandas do dia a dia de pessoas e empresas,
          com estudo do caso antes de qualquer movimentação.
        </SectionIntro>
        <div className="areas-grid">
          {AREAS.map((area) => {
            const Icon = area.icon;
            return (
              <article className="area-card" key={area.title}>
                <span className="area-card__icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="sobre">
      <div className="container about-grid">
        <figure className="about-photo">
          <img src="/assets/escritorio.jpg" alt="Interior do escritório Dr. João Paulo Honório" />
          <figcaption>Av. Bernardo Sayão, 6324 — Centro, Ceres/GO</figcaption>
        </figure>
        <div className="about-copy">
          <SectionIntro
            kicker="Sobre o escritório"
            title="Advocacia próxima, com método e transparência"
          />
          <p>
            Dr. João Paulo Honório da Silva é advogado inscrito na OAB/GO 77627,
            com atuação consultiva e contenciosa. O escritório mantém carteira
            enxuta para garantir atendimento pessoal em cada demanda.
          </p>
          <ul className="check-list">
            <li>Atendimento direto com o advogado responsável</li>
            <li>Estratégia e honorários definidos por escrito</li>
            <li>Atualizações por WhatsApp nos andamentos relevantes</li>
            <li>Consulta inicial sem compromisso</li>
          </ul>
          <p className="about-sign">
            <strong>J. P. Honório</strong>
            <span>Advogado · OAB/GO 77627</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section className="section section--soft" id="metodo">
      <div className="container">
        <SectionIntro
          kicker="Atendimento"
          title="Como conduzimos cada caso"
        >
          O trabalho começa pela escuta. Só depois vem a movimentação — sempre
          com clareza sobre prazos, custos e próximos passos.
        </SectionIntro>
        <ol className="steps">
          {STEPS.map((step, i) => (
            <li className="step-card" key={step.title}>
              <span className="step-card__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section" id="depoimentos">
      <div className="container">
        <SectionIntro
          kicker="Depoimentos"
          title="A confiança de quem já foi atendido"
        >
          Relatos reais. Nomes resguardados quando o cliente preferiu.
        </SectionIntro>
        <div className="testimonials-grid">
          {TESTIS.map((t) => (
            <blockquote className="quote-card" key={t.name}>
              <p>{t.quote}</p>
              <footer>
                <cite>{t.name}</cite>
                <span>{t.caseLabel}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section section--soft" id="contato">
      <div className="container contact-grid">
        <div className="contact-copy">
          <SectionIntro
            kicker="Contato"
            title="Agende sua consulta"
          >
            Envie sua mensagem por WhatsApp ou e-mail. Em até 24 horas você
            recebe orientação preliminar sobre o caso.
          </SectionIntro>
          <div className="contact-actions">
            <a
              className="btn btn--primary"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp <IconArrowRight />
            </a>
            <a
              className="btn btn--outline"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-pulse icon-pulse--inline">
                <IconInstagram />
              </span>
              @joaohonorio.adv
            </a>
          </div>
        </div>
        <ul className="contact-list">
          <li>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <span className="icon-pulse icon-pulse--whatsapp" aria-hidden="true">
                <IconWhatsapp />
              </span>
              <span>
                <strong>WhatsApp</strong>
                (62) 98113-2872
              </span>
            </a>
          </li>
          <li>
            <a href="mailto:adv.joaohonorio@gmail.com">
              <IconMail />
              <span>
                <strong>E-mail</strong>
                adv.joaohonorio@gmail.com
              </span>
            </a>
          </li>
          <li>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <span className="icon-pulse icon-pulse--instagram" aria-hidden="true">
                <IconInstagram />
              </span>
              <span>
                <strong>Instagram</strong>
                @joaohonorio.adv
              </span>
            </a>
          </li>
          <li>
            <a href="https://maps.google.com/?q=Avenida+Bernardo+Say%C3%A3o+6324+Centro+Ceres+GO" target="_blank" rel="noopener noreferrer">
              <IconPin />
              <span>
                <strong>Endereço</strong>
                Av. Bernardo Sayão, 6324 — Centro, Ceres/GO
              </span>
            </a>
          </li>
          <li>
            <div className="contact-static">
              <IconClock />
              <span>
                <strong>Horário</strong>
                Segunda a sexta, 8h–18h · com hora marcada
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="section map-section" id="endereco">
      <div className="container map-panel">
        <div className="map-panel__info">
          <p className="kicker">Localização</p>
          <h2 className="section-intro__title">Visite o escritório</h2>
          <p>
            Av. Bernardo Sayão, nº 6324<br />
            Centro · Ceres — GO<br />
            CEP 76300-188
          </p>
          <a
            className="btn btn--outline"
            href="https://maps.google.com/?q=Avenida+Bernardo+Say%C3%A3o+6324+Centro+Ceres+GO"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir no Google Maps <IconArrowUpRight />
          </a>
        </div>
        <iframe
          title="Mapa — Escritório Dr. João Paulo Honório"
          className="map-panel__frame"
          src="https://maps.google.com/maps?q=Avenida%20Bernardo%20Say%C3%A3o%206324%20Centro%20Ceres%20GO&t=&z=15&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <div className="site-footer__brand-row">
            <span className="site-footer__mark-wrap">
              <img
                src={LOGO_MARK_SRC}
                alt=""
                className="site-footer__mark"
                width={503}
                height={787}
              />
            </span>
            <div>
              <p className="site-footer__name">Dr. João Paulo Honório</p>
              <p className="site-footer__tag">Consultoria Jurídica · Ceres/GO</p>
            </div>
          </div>
          <p className="site-footer__desc">
            Trabalhista, Previdenciário, Tributário, Cível e Família e Sucessões.
          </p>
          <div className="site-footer__social">
            <a
              className="social-float social-float--whatsapp icon-pulse"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <IconWhatsapp />
            </a>
            <a
              className="social-float social-float--instagram icon-pulse icon-pulse--delay"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @joaohonorio.adv"
            >
              <IconInstagram />
            </a>
          </div>
        </div>
        <nav className="site-footer__col" aria-label="Áreas">
          <h3>Áreas</h3>
          <ul>
            {AREAS.map((a) => (
              <li key={a.title}><a href="#areas">{a.title}</a></li>
            ))}
          </ul>
        </nav>
        <nav className="site-footer__col" aria-label="Escritório">
          <h3>Escritório</h3>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#metodo">Atendimento</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
        <div className="site-footer__col">
          <h3>Contato</h3>
          <ul className="site-footer__contact">
            <li>(62) 98113-2872</li>
            <li>adv.joaohonorio@gmail.com</li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                @joaohonorio.adv
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} Dr. João Paulo Honório da Silva</span>
        <span>OAB/GO 77627</span>
      </div>
    </footer>
  );
}

function SocialFloats() {
  return (
    <div className="social-floats" aria-label="Redes sociais">
      <a
        className="social-float social-float--whatsapp icon-pulse"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <IconWhatsapp />
      </a>
      <a
        className="social-float social-float--instagram icon-pulse icon-pulse--delay"
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram @joaohonorio.adv"
      >
        <IconInstagram />
      </a>
    </div>
  );
}

export {
  Header,
  Hero,
  Areas,
  About,
  Method,
  Testimonials,
  Contact,
  MapSection,
  Footer,
  SocialFloats,
};
