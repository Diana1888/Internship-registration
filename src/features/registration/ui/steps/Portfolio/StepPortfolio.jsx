import { useFormContext } from 'react-hook-form';
import { message, portfolioRegex} from "@/shared/lib/validation";
import styles from './StepPortfolio.module.scss'
import  line  from '@/shared/assets/line.png'
import { Button } from '../../../../../shared/ui/Button/Button';

export const StepPortfolio = ({onSubmit,onBack})=>{
    const {
        register,
        handleSubmit, 
        formState: { errors }
    } = useFormContext();
    
    const sendPortfolio = (data) => {
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(sendPortfolio)} className={styles.formContainer}>
            <h2 className={styles.heading}>Step 2. Portfolio link.</h2>
            <p>Provide a link to your portfolio — it can be a website, a Notion page, a PDF, or any other convenient format where your best work is collected.</p>
            <p className={styles.tip}>
                <img src={line} className={styles.line} width={24} alt="line"/>
                Share the projects you are truly proud of.
            </p>
            <div className={styles.inputContainer}>
                <input 
                    className={styles.input}
                    {...register("portfolioUrl", {
                        required:  message.required.portfolio ,
                        pattern: {
                            value: portfolioRegex,
                            message: message.errors.validPortfolio
                        } 
                    })} 
                />
                {errors.portfolioUrl && <p  className={styles.error}>{errors.portfolioUrl.message}</p>}
            </div>
            

            <div className={styles.buttonContainer}>
                                <Button onClick={onBack} action='back'>
                                    Back
                                </Button>
                                                <Button type='submit' action='next'>
                                                    Next
                                                </Button>
                {/* <button 
                    type='button'
                    className={styles.button}
                    onClick={onBack}
                >
                    <ArrowBackIcon className={styles.arrow}/>
                    Back
                </button>
                
                <button 
                    type="submit" 
                    className={styles.button}
                >
                    Next
                    <ArrowForwardIcon className={styles.arrow}/>
                </button>  */}
            </div>

        </form>
    )}