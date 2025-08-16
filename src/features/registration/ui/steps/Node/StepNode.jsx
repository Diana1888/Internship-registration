import { useFormContext } from 'react-hook-form';
import styles from './StepNode.module.scss';
import { message } from '@/shared/lib/validation';
import  line  from '@/shared/assets/line.png'
import { Button } from '../../../../../shared/ui/Button/Button';

export const StepNode = ({onSubmit, onBack}) => {
  const { register, 
    handleSubmit,
    formState: { errors } 
  } = useFormContext();

  const sendNode = (data) => {
    onSubmit(data);
  };
  
  const options = [
{ value: 'know', label: 'I know and use it' },
{ value: 'somewhat', label: 'Somewhat familiar, want to go deeper' },
{ value: 'new', label: 'Not yet, but I want to learn' },
{ value: 'no', label: "No, and I don't plan to" },
  ];

  return (
    <form onSubmit={handleSubmit(sendNode)} className={styles.wrapper}>
      <h2 className={styles.heading}>Step 4. Node.js: familiar or not?</h2>
      <p>We work not only with the frontend.</p>
      <p>Choose how familiar you are with Node.js:</p>
      <p className={styles.tip}>
        <img src={line} className={styles.line} width={24} alt="line"/>
        This is not a test — we just want to understand your current level.
      </p>
      <div className={styles.options}>
        {options.map((option) => (
          <label key={option.value}
            className={styles.option}>
            <input
              type='radio'
              value='know'
              {...register('knowsNode', {
                required: message.required.selectOption,
              })}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      {errors.knowsNode && <p className={styles.error}>{errors.knowsNode.message}</p>}
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
  );
};