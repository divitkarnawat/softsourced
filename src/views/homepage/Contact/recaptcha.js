import React from 'react';

export default class ReCaptchaValidation extends React.Component {
    static defaultProps = {
      handleChange: null,
      lang: 'en',
      key : 0
    }
    constructor(props)
    {
        super(props);
        this.state = {
            Recaptcha: null
          }
       
    }
  
     
    componentDidMount(){
      this.importRecaptcha()
    }
  
    importRecaptcha = async () => {
   
      const { lang } = this.props
      this.setState({ Recaptcha: null })
      delete window.recaptchaOptions
      delete window.grecaptcha
    //   window.recaptchaOptions = {
    //     lang: "de",
    //     useRecaptchaNet: false,
    //     removeOnUnmount: false
    //   }
      const { default: Recaptcha } = await import('react-google-recaptcha')

      this.setState({ Recaptcha })
    
    }
  
    componentWillUnmount () {
      delete window.recaptchaOptions
      delete window.grecaptcha
    }
  
    componentDidUpdate(prevProps){

      if (prevProps.lang !== this.props.lang) {
      
        this.setState({key: Math.random()})
        // this.importRecaptcha()

      }
      
    }
   
  
    render () {
      const { apiKey, className, handleChange, lang } = this.props
      const { Recaptcha } = this.state
      
      return (
   <>
          {Recaptcha && (
            <Recaptcha
            onloadCallback={this.props.onLoadRecaptcha}
            verifyCallback={this.props.verifyCallback}
                key = {this.state.key}
              sitekey={apiKey}   
              hl = {this.props.lang}  
              render="explicit"
             className = {className}
             ref = {(refer)=>this.props.makemeRef(refer)}
             onChange = {this.props.handleOnCaptchaChange}
            />
          )}
         
    </>
      )
    }
  }