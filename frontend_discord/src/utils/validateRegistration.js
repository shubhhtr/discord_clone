import { object, string, date } from 'yup';

const validateRegistration = async (data, setIsInvalid) => {
    const schema = object().shape({
        email: string().email('email').required('email'),
        username: string().min(2, 'username').required('username'),
        password: string().min(6, 'password').required('password'),
        dob: date().required('dob'),
    });

    try {
        const result = await schema.validate(data);
        if (result) {
            //console.log('form is valid', result);
            setIsInvalid({
                email: false,
                password: false,
                username: false,
            });

            return false;
        }
    } catch (err) {
        const field = err.errors;
        setIsInvalid({
            email: false,
            password: false,
            username: false,
            [field]: true,
        });

        return true;
    }
};

export default validateRegistration;
