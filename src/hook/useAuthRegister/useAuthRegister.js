import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const schema = yup.object({
    name:yup.string().required('لطفا نام را وارد کنید'),
    lastName:yup.string().required('لطفا نام خانوادگی را وارد کنید'),
    address:yup.string().required('لطفا آدرس را وارد کنید'),
    mobile:yup.string().required('لطفا شماره همراه را وارد کنید'),
    data:yup.string().required('لطفا تاریخ را وارد کنید'),
})

export const useAuthRegister = () => {

    const {reset , register , handleSubmit , formState:{errors}} = useForm({
        resolver:yupResolver(schema),
        mode:'onChange'
    });

    return {
        register ,handleSubmit ,errors
    }
}
 
