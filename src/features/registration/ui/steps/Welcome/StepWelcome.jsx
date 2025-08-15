import styles from './StepWelcome.module.scss'
import { Paperclip } from 'lucide-react';
import line from '@/shared/assets/line.png';
import { ArrowForwardIcon } from '@/shared/assets/svg/ArrowForwardIcon';



export const StepWelcome = ({onNext}) => {
    return(
        <div className={styles.container}>
            <h2 className={styles.heading}>Step 1. Welcome!</h2>
            <p>You are one step closer to an internship at <span className={styles.boldText}>AL TECH LABS.</span></p>
            <p><span className={styles.boldText}>The internship will take place from September 15 to December 15, 2025,</span> but before that, there are some important stages:</p>
            <ol className={styles.list}>
                <li><span>Application deadline — August 31, 11:59pm</span></li>
                <li>С <span className={styles.boldText}>From September 1 to 15</span> team leads will review the submitted work</li>
                <li>The best participants will be invited <span className={styles.boldText}>to the second stage</span>  — an intensive <span className={styles.boldText}>3-month training program</span></li>
                <li>At the end — <span className={styles.boldText}>an exam,</span>, and if you pass successfully, <span>an internship on a real commercial project</span></li>
            </ol>
            <p>Before starting your registration, <span className={styles.boldText}>prepare:</span></p>
            <ul className={styles.list}>
                <li>A portfolio and GitHub profile</li>
                <li>Projects formatted according to standards</li>
            </ul>
            <p><Paperclip className={styles.paperClip}/>We’ve prepared <a href="/public/guide.pdf" download>a guide on how to get your projects ready </a> — download it and make sure everything is in order.</p>
            <p className={styles.tip}>
                <img src={line} className={styles.line} width={24} alt="line"/>
                Only after that, proceed to the next step.
            </p>
            <div className={styles.buttonContainer}>
                
                <a href="/public/guide.pdf" download className={styles.download}>
                    <button className={styles.button}>
                        Download The Guide
                    </button>
                </a>
                
            
            
            <button
                className={styles.button}
                onClick={onNext}
            >
                Next
                <ArrowForwardIcon className={styles.arrow}/>
            </button> 
            
            </div>          
        </div>
    )
}