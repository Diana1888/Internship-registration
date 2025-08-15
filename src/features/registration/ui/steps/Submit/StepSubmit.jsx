import { useFormContext } from 'react-hook-form';
import styles from './StepSubmit.module.scss';
import { message} from "@/shared/lib/validation";
import line from '@/shared/assets/line.png';
import { ArrowBackIcon } from '@/shared/assets/svg/ArrowBackIcon';
import { ArrowForwardIcon } from '@/shared/assets/svg/ArrowForwardIcon';
import { emailRegex, textRegex } from '@/shared/lib/validation';

export const StepSubmit = ({ onSubmit, onBack }) => {
  const {
    register,
    handleSubmit, 
    formState: { errors },
    watch,
  } = useFormContext();

  const agreed = watch('agree');
  const handleFinalSubmit = (data) => {
    onSubmit(data);
};

  return (
    <form onSubmit={handleSubmit(handleFinalSubmit)} className={styles.formContainer}>
      <h2 className={styles.heading}>Step 5. Submit your application</h2> 
      <p className={styles.par}>Well done — now all that’s left is to click the button!</p>
      <p className={styles.par}>By clicking “Submit,” you are sending your application for an internship at AL TECH LABS.</p>
      <p className={styles.par}>We will review it and get back to you within 14 days.</p>
      <p className={styles.tip}>
        <img src={line} className={styles.line} width={24} alt="line"/>
        Good luck! We hope to see you among our interns.
      </p>
      <div className={styles.label}>        

        <label > First and Last Name: </label>
          <input
            {...register('fullName', {
              required: message.required.text,
              pattern: {
                value: textRegex,
                message: message.errors.validName,
              },
            })}
            type="text"
            className={styles.input}
          />
      
        {errors.fullName && <p className={styles.error}>{errors.fullName.message}</p>}

        <label>Email: </label>
          <input
            {...register('email', {
              required: message.required.email,
              pattern: {
                value: emailRegex,
                message: message.errors.validEmail,
              },
            })}
            type="email"
            className={styles.input}
          />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

        <label>
          <input
            type="checkbox"
            {...register('agree', { required: message.required.must })}
            className={styles.input}
          />
          I agree to the processing of personal data
        </label>
        {errors.agree && <p className={styles.error}>{errors.agree.message}</p>}
      </div> 

      <div className={styles.buttonContainer}>
        <button 
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
          Submit
          <ArrowForwardIcon className={styles.arrow}/>
        </button> 
      </div>
    </form>
  );
};