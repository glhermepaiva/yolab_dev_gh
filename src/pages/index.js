import Head from 'next/head'
import styles from '../styles/index.module.css'

export default function LandingPage() {

  const onSubmit = async (e) => {
    alert("Enviado!")
    e.preventDefault();
  }

  const ToggleSound = () => {
    alert("Sound on!")
  }

  return (
    <div className={styles.page}>
      <Head>
        <title>YO! LAB</title>
        <meta name='description' content='GET READY TO THE NEW' />
      </Head>
      <div className={styles.header}>
        <div className={styles.headerLogo}>YO! LAB</div>
        <button className={styles.headerSoundButton} onClick={ToggleSound}>SOUND ON</button>
      </div>
      <div className={styles.wave1} />
      <div className={styles.carousel}>
        <div className={styles.carouselLine1} />
        <div className={styles.carouselText1}>Quer ser mais&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;interessante?</div>
        <div className={styles.carouselLine2} />
        <div className={styles.carouselText2}>Honestidade &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vende perfeição</div>
        <div className={styles.carouselLine3} />
        <div className={styles.carouselSmartphone} />
        <div className={styles.carouselTenis} />
        <div className={styles.carouselSeloYo} />
      </div>
      <div className={styles.welcome}>
        <div>
          <div className={styles.welcomeTitle}>Welcome to Yo's</div>
          <div className={styles.welcomeText}>Empresas são diferentes <br/>tem problemas diferentes.<br/> Não dá mais pra utilizar <br/>a mesma fórmula para todas elas. <br/>Somos uma mix de expertises:<br/> planejamento, criação, consultoria, tecnologia,<br/> distribuição, dados e esteira de produção.<br/> Trabalhamos de uma maneira customizada<br/> na operação, na remuneração e até mesmo <br/>na variação mensal do time de especialistas<br/> envolvidos. Aqui você paga pelo<br/> que você usa e quando usa.<br/> Porque a sua demanda<br/> é a nossa demanda.</div>
        </div>
        <div className={styles.wave2} />
        <div className={styles.welcomeImage} />
      </div>
      <div className={styles.form}>
      <div className={styles.wave3} />
        <div className={styles.formMain}>
          <div className={styles.planet} />
          <div className={styles.contactForm}>
            <div className={styles.contactFormTitle}>GET IN TOUCH</div>
            <div className={styles.contactFormText}>Escreva aqui</div>
            <div>
              <form className={styles.formFields} onSubmit={onSubmit}>
                <input className={styles.formFieldName} type="text" name="name" placeholder="Nome:" />
                <input className={styles.formFieldEmail} type="text" name="email" placeholder="e-mail:" />
                <input className={styles.formFieldMessage} type="text" name="message" placeholder="Mensagem:" />
                <button className={styles.contactFormButton}>SEND</button>
              </form>
            </div>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.contactInfoText}>Ou se preferir</div>
            <div className={styles.contactInfoEmail}>yo@yolab.com</div>
            <div className={styles.contactInfoSocial}>
              <div className={styles.contactInfoSocialIn} />
              <div className={styles.contactInfoSocialTt} />
              <div className={styles.contactInfoSocialFb} />
            </div>
          </div>
        </div>
        <div className={styles.footer}>GET READY TO THE NEW // TRUSTED BY: PROVU, MISHA, MARGOUX E DR SHOWS /// YO! INDEPENDENT CREATIVE</div>
      </div>
    </div>
  )
}
