import Button from '../../components/helper/Button.jsx'
import './contact.scss'
import {useFormik} from 'formik'
import  Validation  from "./schema/SchemaValidation";

const Contact = () => {
        const formik = useFormik({
          initialValues:{
              username:'',
              email:'',
              message:''
          },
          validationSchema:Validation,

          onSubmit: (values,action) => {
            action.resetForm()
          },
        })

  return (
    <>
    <section className="contactSection">
      <h3>Feel Free To Contact Us</h3>
        <div className="map">
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.47795504646!2d76.8130254684997!3d28.644398071388885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1670935885496!5m2!1sen!2sin" width="100%" height="350" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
          <div className="container">
        <div className="form-wrapper">
        <form  onSubmit={formik.handleSubmit} action="https://formspree.io/f/xnqyvggv" method="POST">
          <div className="inp">
            <input type="text"
             name="username"
             placeholder="USERNAME" 
             id="username"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur} 
             value={formik.values.username} />
             { formik.errors.username && formik.touched.username ?( <p className="error-msg">{formik.errors.username}</p>) : null}
          </div>
          <div className="inp">
            <input type="email" 
            placeholder="E-MAIL"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} 
            value={formik.values.email} />
             { formik.errors.email && formik.touched.email ?( <p className="error-msg">{formik.errors.email}</p>) : null}
          </div>
          <div className="inp">
          <textarea cols="30" rows="10"
           placeholder="Enter your message"
           id="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} 
            value={formik.values.message}>
            </textarea>
            { formik.errors.message && formik.touched.message ?( <p className="error-msg">{formik.errors.message}</p>) : null}
          </div>
          <div className="btn text-end">
            <Button className="mainbtn "  Text={'Send'}></Button>
          </div>
        </form>
        </div>
        </div>
    </section>
    </>
  );
};

export default Contact;
