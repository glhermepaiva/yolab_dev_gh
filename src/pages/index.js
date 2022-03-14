import Head from 'next/head'
import styles from '../styles/index.module.css'
import * as yup from 'yup'
import emailjs from 'emailjs-com'
import { useState, useEffect } from 'react'
import ReactLoading from 'react-loading'
import leopard from '../assets/leopardo.png'
import relogioesq from '../assets/relogioesq.png'
import relogiodir from '../assets/relogiodir.png'
import Lion from '../assets/leão.png'
import raios from '../assets/raios.png'
import { Howl } from 'howler'

export default function LandingPage() {

  const linkedinLink = () => {
    window.open('https://www.linkedin.com/company/yoagencia/');
  }

  const instaLink = () => {
    window.open('https://www.instagram.com/yoagencia/');
  }

  const facebookLink = () => {
    window.open('https://www.facebook.com/yoagencia/');
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

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {

  setAnimalImage(welcomeImageRandom)

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);

  }, [])

  function changeAnimalImage() {
    if (animalImage === 0){
      return(
        <div>
          <img src={images[animalImage]} className={styles.imageLeopard}/>
          <img src={relogioesq.src} className={styles.relogioesq}/>
          <img src={relogiodir.src} className={styles.relogiodir}/>
        </div>
      )
    } if (animalImage === 1){
      return(
        <div>
          <img src={images[animalImage]} className={styles.imageLion}/>
          <img src={raios.src} className={styles.raios}/>
        </div>
      )
    }
  }

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        window.addEventListener("resize", handleResize);
       
        handleResize();
      
        return () => window.removeEventListener("resize", handleResize);

    }, []);

    return windowSize;
  }

  const [soundOn, setSoundOn] = useState(false)

  const sound = new Howl({
    src: ['https://cdn.pixabay.com/download/audio/2021/02/01/audio_3620719b92.mp3?filename=moonlight-2526.mp3'],
    volume: 0.1,
    loop: true,
  });

  function turnSoundOn(){
    sound.play(),
    setSoundOn(true)
  }

  function turnSoundOff(){
    window.location.reload();
  }

  return (
    <div className={styles.page}>
      <Head>
        <title>YO! LAB</title>
        <meta name='description' content='GET READY TO THE NEW' />
      </Head>
      <div className={styles.header}>
        <div className={styles.headerLogo}>YO! LAB</div>
        {soundOn ? <button className={styles.headerSoundButton} onClick={() => turnSoundOff()}>SOUND OFF</button> : <button className={styles.headerSoundButton} onClick={() => turnSoundOn()}>SOUND ON</button>}
      </div>
      <div className={styles.wave1} style={{transform: `translateY(${offsetY * 0.3}px)`}} />
      <div className={styles.carouselSmartphone} />
      <div className={styles.carouselTenis} />
      <div className={styles.carouselCerebro} />
      <div className={styles.carouselRobo} />
      <div className={styles.carousel}>
        <div className={styles.carouselLine1} />
        <div className={styles.carouselTextLine1}>
            <span className={styles.carouselText1}>&nbsp;Planejamento Estratégico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criação&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mídia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produção Digital&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Planejamento Estratégico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criação&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mídia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produção Digital&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Planejamento Estratégico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criação&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mídia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produção Digital&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Planejamento Estratégico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criação&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mídia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produção Digital&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Planejamento Estratégico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criação&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mídia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produção Digital&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Planejamento Estratégico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criação&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mídia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produção Digital&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Planejamento Estratégico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criação&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mídia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produção Digital&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Planejamento Estratégico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criação&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mídia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produção Digital&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Planejamento Estratégico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criação&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mídia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produção Digital&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Planejamento Estratégico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criação&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mídia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produção Digital&nbsp;&nbsp;</span>
            <span className={styles.carouselText12}>&nbsp;Planejamento Estratégico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criação&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mídia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produção Digital&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Planejamento Estratégico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criação&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mídia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produção Digital&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Planejamento Estratégico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criação&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mídia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produção Digital&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Planejamento Estratégico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criação&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mídia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produção Digital&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Planejamento Estratégico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criação&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mídia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produção Digital&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Planejamento Estratégico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criação&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mídia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produção Digital&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Planejamento Estratégico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criação&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mídia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produção Digital&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Planejamento Estratégico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criação&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mídia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produção Digital&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Planejamento Estratégico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criação&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mídia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produção Digital&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Planejamento Estratégico&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Criação&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mídia&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Produção Digital&nbsp;&nbsp;</span>
        </div>
        <div className={styles.carouselTextLine12}>
            <span className={styles.carouselText1}>&nbsp;Honestidade vende, perfeição afasta. Honestidade vende, perfeição afasta.&nbsp;&nbsp;Honestidade vende, perfeição afasta. Honestidade vende, perfeição afasta.&nbsp;&nbsp;Honestidade vende, perfeição afasta. Honestidade vende, perfeição afasta.&nbsp;&nbsp;Honestidade vende, perfeição afasta. Honestidade vende, perfeição afasta.&nbsp;&nbsp;Honestidade vende, perfeição afasta. Honestidade vende, perfeição afasta.&nbsp;&nbsp;Honestidade vende, perfeição afasta. Honestidade vende, perfeição afasta.&nbsp;&nbsp;Honestidade vende, perfeição afasta. Honestidade vende, perfeição afasta.&nbsp;&nbsp;Honestidade vende, perfeição afasta. Honestidade vende, perfeição afasta.&nbsp;&nbsp;</span>
            <span className={styles.carouselText12}>&nbsp;Honestidade vende, perfeição afasta. Honestidade vende, perfeição afasta.&nbsp;&nbsp;Honestidade vende, perfeição afasta. Honestidade vende, perfeição afasta.&nbsp;&nbsp;Honestidade vende, perfeição afasta. Honestidade vende, perfeição afasta.&nbsp;&nbsp;Honestidade vende, perfeição afasta. Honestidade vende, perfeição afasta.&nbsp;&nbsp;Honestidade vende, perfeição afasta. Honestidade vende, perfeição afasta.&nbsp;&nbsp;Honestidade vende, perfeição afasta. Honestidade vende, perfeição afasta.&nbsp;&nbsp;Honestidade vende, perfeição afasta. Honestidade vende, perfeição afasta.&nbsp;&nbsp;Honestidade vende, perfeição afasta. Honestidade vende, perfeição afasta.&nbsp;&nbsp;</span>
        </div>
        <div className={styles.carouselLine2} />
        <div className={styles.carouselTextLine2}>
          <div className={styles.carouselText2}>&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div className={styles.carouselText22}>&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Performance&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados&nbsp;&nbsp;&nbsp;Growth&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className={styles.carouselTextLine22}>
          <div className={styles.carouselText2}>&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;</div>
          <div className={styles.carouselText22}>&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;Creative Push&nbsp;&nbsp;&nbsp;</div>
        </div>
        <div className={styles.carouselLine3} />
        <div>
          <div className={styles.carouselSeloYoFundo}></div>
          <div className={styles.carouselSeloYoLogo}></div>
        </div>
      </div>
      <div className={styles.welcome}>
        <div>
          <div className={styles.welcomeTitle}>Welcome to Yo&apos;s</div>
          <div className={styles.welcomeText}>Empresas são diferentes, tem problemas diferentes. Não dá mais pra utilizar a mesma fórmula para todas elas. Somos uma mix de expertises: planejamento, criação, consultoria, tecnologia, distribuição, dados e esteira de produção. Seu negócio é o nosso ponto de partida, por isso trabalhamos de uma maneira customizada na operação, na remuneração e até mesmo na variação mensal do time de especialistas envolvidos. Priorizamos ações à partir do seu potencia de retorno. Porque a sua demanda é a nossa demanda.</div>
        </div>
        <div className={styles.wave2} style={{transform: `translateY(${offsetY * -0.3}px)`}} />
        <div>
          <div className={styles.welcomeImage}>
            {changeAnimalImage()}
          </div>
        </div>
      </div>
      <div className={styles.form}>
      <div className={styles.wave3} style={{transform: `translateY(${offsetY * 0.4}px)`}} />
        {loading ? <div className={styles.formLoading}><ReactLoading type={"spinningBubbles"} color={"#aeff02"} height={"10%"} width={"10%"}/></div> : <div className={styles.formMain}>
          <div>
            <div className={styles.orbit}></div>
            <div className={styles.planet}></div>
          </div>
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
              <div className={styles.contactInfoSocialTt} onClick={instaLink}/>
              <div className={styles.contactInfoSocialFb} onClick={facebookLink}/>
            </div>
          </div>
        </div>}
        <div className={styles.footerTextLine}>
          <div className={styles.footerText1}>/// GET READY TO THE NEW // TRUSTED BY: PROVU, MISHA, MARGOUX E DR SHOWS /// YO! LAB INDEPENDENT CREATIVE /// GET READY TO THE NEW // TRUSTED BY: PROVU, MISHA, MARGOUX E DR SHOWS /// YO! LAB INDEPENDENT CREATIVE&nbsp;</div>
          <div className={styles.footerText11}>&nbsp;&nbsp;&nbsp;/// GET READY TO THE NEW // TRUSTED BY: PROVU, MISHA, MARGOUX E DR SHOWS /// YO! LAB INDEPENDENT CREATIVE /// GET READY TO THE NEW // TRUSTED BY: PROVU, MISHA, MARGOUX E DR SHOWS /// YO! LAB INDEPENDENT CREATIVE</div>
        </div>
      </div>
    </div>
  )
}
