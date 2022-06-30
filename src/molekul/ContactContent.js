import Button from "../atom/Button";
import FormLabel from "../atom/FormLabel";
import TextArea from "../atom/TextArea";

export default function ContactContent(){
    return(
        <div className="contact">
        <FormLabel/>
        <TextArea/>
        <Button/> 
        </div>
    )
}