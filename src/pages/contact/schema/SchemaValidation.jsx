import * as Yup from 'yup'

 const Validation = Yup.object({
    username: Yup.string().min(3).max(15).required('Enter your name'),
    email: Yup.string().email().required('Enter your email'),
    message: Yup.string().min(10).max(300).required('Enter your message')
})

export default Validation