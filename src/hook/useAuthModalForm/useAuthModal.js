import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


export const schema = yup.object({
    thumbnail:yup.mixed().required('لطفا تصویر را وارد کنید'),
    image:yup.mixed().required('لطفا تصویر را وارد کنید'),
    name:yup.string().required('لطفا نام کالا را وارد کنید'),
    brand:yup.string().required('لطفا برند کالا را وارد کنید'),
    categoryname:yup.string().required('لطفا دسته بندی را انتخاب کنید'),
    price:yup.string().required('لطفا قیمت را وارد کنید'),
    quantity:yup.string().required('لطفا تعداد را وارد کنید'),
})

export const useAuthModalForm = () => {

    const {register , handleSubmit , formState:{errors}} = useForm({
        resolver:yupResolver(schema),
        mode:'onChange'
    });

    return {
        register ,handleSubmit ,errors
    }
}
 
