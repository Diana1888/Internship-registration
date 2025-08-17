import { useFormContext } from 'react-hook-form';
import { message, projectRegex} from "@/shared/lib/validation";
import styles from './StepProject.module.scss';
import line from '@/shared/assets/line.png'
import { Button } from '../../../../../shared/ui/Button/Button';

export const StepProject = ({onSubmit, onBack})=>{
    const {
        register,
        handleSubmit, 
        formState: { errors}
    } = useFormContext();

    const sendProject = (data) => {
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(sendProject)} className={styles.formContainer}>
            <h2 className={styles.heading}>Step 3. React project.</h2>
                <p>Attach a link to one of your projects built with React and Redux (or another state manager if you use a different one).</p>
                <p className={styles.tip}>
                    <img src={line} className={styles.line} width={24} alt="line"/>
                    This will help us assess your frontend skills, architecture, and attention to detail.
                </p>
            <div className={styles.inputContainer}>
                <input 
                    className={styles.input}
                    {...register("projectUrl", {
                        required:  message.required.reactproject,
                        pattern: {
                            value: projectRegex,
                            message: message.errors.validProject
                        } 
                    })} 
                />
                {errors.projectUrl && <p  className={styles.error}>{errors.projectUrl.message}</p>}
            </div>
            
                 <div className={styles.buttonContainer}>
                    <Button onClick={onBack} action='back'>
                        Back
                        </Button>
                        <Button type='submit' action='next'>
                        Next
                            </Button>
            </div>
        </form>
    )}