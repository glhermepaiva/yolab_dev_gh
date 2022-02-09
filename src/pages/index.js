import Head from 'next/head'
import styles from '../styles/index.module.css'
import * as yup from 'yup'
import emailjs from 'emailjs-com'
import { useState, useEffect } from 'react'
import ReactLoading from 'react-loading'
import leopard from '../assets/leopardo.png'
import Lion from '../assets/leão.png'

export default function LandingPage() {

  const ToggleSound = () => {
    alert("Sound on!")
  }

  const linkedinLink = () => {
    alert("Abrindo Linkedin...")
  }

  const twitterLink = () => {
    alert("Abrindo Twitter...")
  }

  const facebookLink = () => {
    alert("Abrindo Facebook...")
  }

  const schema = yup.object().shape({
        name: yup.string().required('Nome não pode estar em branco'),
        email: yup.string().email('Endereço de email inválido').required('Email não pode estar em branco'),
        message: yup.string().min(3, 'A mensagem deve ter no mínimo 3 caracteres').max(300, 'A mensagem pode ter no máximo 300 caracteres').required('Mensagem não pode estar em branco')
  })

  const [loading, setLoading] = useState(false)

  const onSubmit = async (e) => {
      e.preventDefault();

      setLoading(true)

      let formData = {
            name: e.target[0].value,
            email: e.target[1].value,
            message: e.target[2].value,
      }

      const isValid = await schema.isValid(formData);

      if (isValid) {
          emailjs.sendForm('service_ibuddku', 'template_yolab', e.target, 'user_qksKqi9BtojdtprKYCtue')

          .then((result) => {
              console.log(result);
              alert("Sucesso! Logo entraremos em contato!")
              window.location.href = "/?uri=";
          }, (error) => {
              console.log(error);
              setLoading(false)
          });

            
      } else {
          alert("Por favor garanta que os campos foram preenchidos corretamente e tente novamente.")
          setLoading(false)
      }
  }


  const images = [leopard.src, Lion.src]
  const [animalImage, setAnimalImage] = useState(0)
  const welcomeImageRandom = Math.round(Math.random())

  useEffect(() => {

  setAnimalImage(welcomeImageRandom)

}, [])

  function changeAnimalImage() {
    if (animalImage === 0){
      return(
        <img src={images[animalImage]} className={styles.imageLeopard}/>
      )
    } if (animalImage === 1){
      return(
        <img src={images[animalImage]} className={styles.imageLion}/>
      )
    }
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
      <div className={styles.carouselSmartphone} />
      <div className={styles.carouselTenis} />
      <div className={styles.carouselCerebro} />
      <div className={styles.carousel}>
        <div className={styles.carouselLine1} />
        <div className={styles.carouselTextLine1}>
            <span className={styles.carouselText1}>&nbsp;Honestidade vende, perfeição afasta. Honestidade vende, perfeição afasta.&nbsp;</span>
            <span className={styles.carouselText12}>&nbsp;Honestidade vende, perfeição afasta. Honestidade vende, perfeição afasta.&nbsp;</span>
        </div>
        <div className={styles.carouselTextLine12}>
            <span className={styles.carouselText1}>&nbsp;Sua demanda é nossa demanda.&nbsp;&nbsp;&nbsp; Sua demanda é nossa demanda.&nbsp;</span>
            <span className={styles.carouselText12}>&nbsp;Sua demanda é nossa demanda.&nbsp;&nbsp;&nbsp; Sua demanda é nossa demanda.&nbsp;</span>
        </div>
        <div className={styles.carouselLine2} />
        <div className={styles.carouselTextLine2}>
          <div className={styles.carouselText2}>&nbsp;&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creative Push&nbsp;</div>
          <div className={styles.carouselText22}>&nbsp;&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creative Push&nbsp;</div>
        </div>
        <div className={styles.carouselTextLine22}>
          <div className={styles.carouselText2}>&nbsp;&nbsp;&nbsp;&nbsp;One Stop Shop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One Stop Shop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One Stop Shop&nbsp;</div>
          <div className={styles.carouselText22}>&nbsp;&nbsp;&nbsp;&nbsp;One Stop Shop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One Stop Shop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One Stop Shop&nbsp;</div>
        </div>
        <div className={styles.carouselLine3} />
        <div className={styles.carouselSeloYo} />
      </div>
      <div className={styles.welcome}>
        <div>
          <div className={styles.welcomeTitle}>Welcome to Yo&apos;s</div>
          <div className={styles.welcomeText}>Empresas são diferentes <br/>tem problemas diferentes.<br/> Não dá mais pra utilizar <br/>a mesma fórmula para todas elas. <br/>Somos uma mix de expertises:<br/> planejamento, criação, consultoria, tecnologia,<br/> distribuição, dados e esteira de produção.<br/> Trabalhamos de uma maneira customizada<br/> na operação, na remuneração e até mesmo <br/>na variação mensal do time de especialistas<br/> envolvidos. Aqui você paga pelo<br/> que você usa e quando usa.<br/> Porque a sua demanda<br/> é a nossa demanda.</div>
        </div>
        <div className={styles.wave2} />
        <div className={styles.welcomeImage}>
          {changeAnimalImage()}
        </div>
      </div>
      <div className={styles.form}>
      <div className={styles.wave3} />
        {loading ? <div className={styles.formLoading}><ReactLoading type={"spinningBubbles"} color={"#aeff02"} height={"10%"} width={"10%"}/></div> : <div className={styles.formMain}>
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
              <div className={styles.contactInfoSocialIn} onClick={linkedinLink}/>
              <div className={styles.contactInfoSocialTt} onClick={twitterLink}/>
              <div className={styles.contactInfoSocialFb} onClick={facebookLink}/>
            </div>
          </div>
        </div>}
        <div className={styles.footer}>GET READY TO THE NEW // TRUSTED BY: PROVU, MISHA, MARGOUX E DR SHOWS /// YO! INDEPENDENT CREATIVE</div>
      </div>
    </div>
  )
}
