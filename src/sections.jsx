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
const CONTACT_EMAIL = 'contato@jphonorio.adv.br';
const CONTACT_API = import.meta.env.VITE_CONTACT_API_URL ?? '';

const NAV_LINKS = [
  { href: '#top', label: 'Início' },
  { href: '#areas', label: 'Áreas de atuação' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#contato', label: 'Contato' },
];

const AREAS = [
  {
    icon: IconBriefcase,
    title: 'Trabalhista',
    description:
      'Orientação para trabalhadores e empregadores em casos de verbas rescisórias, horas extras, reconhecimento de vínculo, rescisão indireta, justa causa, acordos e outros conflitos de trabalho.',
  },
  {
    icon: IconShield,
    title: 'Previdenciário',
    description:
      'Aposentadorias, BPC/LOAS, auxílio por incapacidade, auxílio-acidente, salário-maternidade, revisões e acompanhamento de benefícios do INSS.',
  },
  {
    icon: IconScales,
    title: 'Tributário',
    description:
      'Orientação sobre dívidas e cobranças fiscais, parcelamentos, defesa em processos tributários, recuperação de créditos e organização tributária.',
  },
  {
    icon: IconHearth,
    title: 'Família e Sucessões',
    description:
      'Divórcio, guarda dos filhos, pensão alimentícia, união estável, inventário, partilha de bens e testamento.',
  },
  {
    icon: IconGavel,
    title: 'Cível e Consumidor',
    description:
      'Contratos, cobranças indevidas, problemas nas relações de consumo, responsabilidade civil, obrigações e pedidos de indenização.',
  },
];

const STEPS = [
  {
    title: 'Conte o seu caso',
    body: 'Você explica a situação e apresenta as principais dúvidas e preocupações.',
  },
  {
    title: 'Análise e orientação',
    body: 'Os documentos e as informações são analisados para identificar os caminhos juridicamente possíveis.',
  },
  {
    title: 'Definição da atuação',
    body: 'Antes de qualquer medida, são apresentados os próximos passos, os honorários, os prazos estimados e os riscos envolvidos.',
  },
  {
    title: 'Acompanhamento',
    body: 'Se houver contratação, o cliente recebe informações sobre as movimentações relevantes e pode esclarecer suas dúvidas diretamente com o escritório.',
  },
];

const COMMITMENTS = [
  {
    title: 'Clareza desde o início',
    body: 'Explicações simples sobre as possibilidades, os riscos e as etapas do caso.',
  },
  {
    title: 'Comunicação responsável',
    body: 'Informações sobre as movimentações relevantes, sem promessas ou expectativas irreais.',
  },
  {
    title: 'Decisões conscientes',
    body: 'Antes de qualquer medida, você recebe as informações necessárias para decidir com segurança.',
  },
];

const FAQ_ITEMS = [
  {
    question: 'O atendimento é somente em Ceres?',
    answer:
      'Não. O escritório realiza atendimentos presenciais em Ceres/GO e também oferece atendimento online.',
  },
  {
    question: 'Preciso apresentar documentos no primeiro contato?',
    answer:
      'Se você já tiver documentos relacionados ao caso, poderá encaminhá-los para facilitar a análise. O escritório também informará quais outros documentos serão necessários.',
  },
  {
    question: 'Como são informados os honorários?',
    answer:
      'Os honorários e as condições de pagamento são apresentados antes do início da atuação e formalizados em contrato.',
  },
  {
    question: 'Entrar em contato significa que preciso contratar?',
    answer:
      'Não. O primeiro contato serve para organizar o atendimento e verificar a forma adequada de análise da situação.',
  },
  {
    question: 'Existe garantia de resultado?',
    answer:
      'Não. O resultado depende dos fatos, dos documentos, da legislação aplicável e da análise das autoridades responsáveis. O compromisso do escritório é atuar com responsabilidade, transparência e dedicação.',
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
        <a className="btn btn--outline site-header__cta" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          Falar com o escritório
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
          <a className="btn btn--primary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={close}>
            Falar com o escritório
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
          <p className="kicker">Ceres — GO · Atendimento presencial e online</p>
          <h1 className="hero__title">
            Orientação jurídica clara para decisões importantes
          </h1>
          <p className="hero__lead">
            Atendimento direto com o advogado responsável, análise individual do
            caso e explicações simples sobre as possibilidades, os riscos e os
            próximos passos.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Falar com o escritório <IconArrowRight />
            </a>
            <a className="btn btn--ghost" href="#areas">
              Conhecer áreas de atuação
            </a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>Presencial</dt>
              <dd>Atendimento em Ceres/GO</dd>
            </div>
            <div>
              <dt>Online</dt>
              <dd>Atendimento à distância</dd>
            </div>
            <div>
              <dt>Retorno</dt>
              <dd>Em até 1 dia útil</dd>
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
              <span>Advogado · OAB/GO 77.627</span>
              <em>Atendimento presencial e online</em>
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
          title="Atuação jurídica para pessoas, famílias e empresas"
        >
          Cada situação é analisada individualmente, com orientação clara sobre
          os direitos envolvidos e as medidas que podem ser adotadas.
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
            title="Atendimento pessoal, comunicação clara e responsabilidade"
          />
          <p>
            O escritório é conduzido pelo advogado João Paulo Honório da Silva,
            inscrito na OAB/GO sob o nº 77.627, com atuação preventiva e judicial.
          </p>
          <p>
            Cada atendimento começa pela compreensão da situação do cliente.
            Depois da análise, são apresentados os caminhos possíveis, os riscos,
            os custos e as etapas necessárias.
          </p>
          <ul className="check-list">
            <li>Atendimento direto com o advogado responsável</li>
            <li>Análise individual de cada caso</li>
            <li>Explicações em linguagem simples</li>
            <li>Honorários e condições apresentados por escrito</li>
            <li>Informações sobre as movimentações relevantes do processo</li>
          </ul>
          <p className="about-sign">
            <strong>João Paulo Honório da Silva</strong>
            <span>Advogado · OAB/GO 77.627</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section className="section section--soft" id="como-funciona">
      <div className="container">
        <SectionIntro
          kicker="Como funciona"
          title="Você entende o caminho antes de decidir"
        >
          O atendimento começa pela compreensão do problema. Depois, o caso é
          analisado e as possibilidades são explicadas com clareza.
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

function Commitment() {
  return (
    <section className="section" id="compromisso">
      <div className="container">
        <SectionIntro
          kicker="Compromisso com o cliente"
          title="O que você pode esperar do atendimento"
        />
        <div className="commitment-grid">
          {COMMITMENTS.map((item) => (
            <article className="commitment-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="section section--soft" id="duvidas">
      <div className="container">
        <SectionIntro kicker="Dúvidas frequentes" title="Perguntas comuns antes do contato" />
        <div className="faq-list">
          {FAQ_ITEMS.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function formatPhoneBr(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits ? `(${digits}` : '';
  if (digits.length <= 3) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 7) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3, 7)}-${digits.slice(7)}`;
}

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handlePhoneChange = (e) => {
    setForm((prev) => ({ ...prev, phone: formatPhoneBr(e.target.value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!CONTACT_API) {
      setStatus('error');
      setFeedback('Formulário em configuração. Use WhatsApp ou e-mail.');
      return;
    }

    setStatus('sending');
    setFeedback('');

    try {
      const res = await fetch(`${CONTACT_API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Não foi possível enviar.');

      setStatus('success');
      setFeedback('Mensagem enviada. Retorno em até 1 dia útil.');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus('error');
      setFeedback(err.message || 'Erro ao enviar. Tente WhatsApp.');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__grid">
        <label className="field">
          <span>Nome</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={update('name')}
            required
            autoComplete="name"
          />
        </label>
        <label className="field">
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={update('email')}
            required
            autoComplete="email"
          />
        </label>
        <label className="field">
          <span>Telefone</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handlePhoneChange}
            autoComplete="tel"
            inputMode="numeric"
            placeholder="(62) 9 9999-9999"
            maxLength={16}
          />
        </label>
        <label className="field field--full">
          <span>Mensagem</span>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={update('message')}
            required
          />
        </label>
      </div>
      <div className="contact-form__actions">
        <button
          type="submit"
          className="btn btn--primary"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
        </button>
        {feedback && (
          <p className={`contact-form__feedback contact-form__feedback--${status}`}>
            {feedback}
          </p>
        )}
      </div>
    </form>
  );
}

function Contact() {
  return (
    <section className="section section--soft" id="contato">
      <div className="container contact-grid">
        <div className="contact-copy">
          <SectionIntro
            kicker="Contato"
            title="Fale com o escritório"
          >
            Envie uma mensagem pelo WhatsApp com seu nome e um breve resumo da situação.
            O retorno será realizado em até 1 dia útil para organizar o atendimento.
          </SectionIntro>
          <div className="contact-actions contact-actions--lead">
            <a
              className="btn btn--primary"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Iniciar conversa no WhatsApp <IconArrowRight />
            </a>
          </div>
          <ContactForm />
        </div>
        <ul className="contact-list">
          <li>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <span className="contact-list__icon contact-list__icon--whatsapp" aria-hidden="true">
                <IconWhatsapp />
              </span>
              <span>
                <strong>WhatsApp</strong>
                (62) 98113-2872
              </span>
            </a>
          </li>
          <li>
            <a href={`mailto:${CONTACT_EMAIL}`}>
              <IconMail />
              <span>
                <strong>E-mail</strong>
                {CONTACT_EMAIL}
              </span>
            </a>
          </li>
          <li>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <span className="contact-list__icon contact-list__icon--instagram" aria-hidden="true">
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
          <h2 className="section-intro__title">Atendimento presencial em Ceres</h2>
          <p>
            Av. Bernardo Sayão, nº 6324<br />
            Centro, Ceres — GO<br />
            CEP 76300-188
          </p>
          <a
            className="btn btn--outline"
            href="https://maps.google.com/?q=Avenida+Bernardo+Say%C3%A3o+6324+Centro+Ceres+GO"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver rota no Google Maps <IconArrowUpRight />
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
              <p className="site-footer__name">João Paulo Honório da Silva</p>
              <p className="site-footer__tag">Advogado · OAB/GO 77.627</p>
            </div>
          </div>
          <p className="site-footer__desc">
            Atendimento presencial em Ceres/GO e online. Trabalhista, Previdenciário,
            Tributário, Família e Sucessões, Cível e Consumidor.
          </p>
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
            <li><a href="#como-funciona">Como funciona</a></li>
            <li><a href="#compromisso">Compromisso</a></li>
            <li><a href="#duvidas">Dúvidas</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
        <div className="site-footer__col">
          <h3>Contato</h3>
          <ul className="site-footer__contact">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                WhatsApp: (62) 98113-2872
              </a>
            </li>
            <li>{CONTACT_EMAIL}</li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                Instagram: @joaohonorio.adv
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container site-footer__legal">
        <p>
          Este site possui caráter informativo. Cada situação exige análise individual,
          e os resultados podem variar de acordo com os fatos e documentos apresentados.
        </p>
      </div>
      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} João Paulo Honório da Silva</span>
        <span>OAB/GO 77.627</span>
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
  Commitment,
  Faq,
  Contact,
  MapSection,
  Footer,
  SocialFloats,
};
