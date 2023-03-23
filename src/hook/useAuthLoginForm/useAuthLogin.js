import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


export const schema = yup.object({
    username:yup.string().required('لطفا نام کاربری را وارد کنید'),
    password:yup.string().required('لطفا رمز عبور را وارد کنید'),
})

export const useAuthLoginForm = () => {

    const { register , handleSubmit , formState:{errors}} = useForm({
        resolver:yupResolver(schema),
        mode:'onChange'
    });

    return {
        register ,handleSubmit ,errors
    }
}
 
