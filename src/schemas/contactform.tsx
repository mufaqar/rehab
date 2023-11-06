import * as Yup from 'yup';


export const contactform = Yup.object({
    name: Yup.string().required("Please add your name here"),
    phone: Yup.string().required("Please add your number here"),
    services: Yup.string().required("Please select a service"),
    time: Yup.string().required("Please select time"),
})