import styles from "./PostCard.module.css"

export function PostCard(props){
    return(
        <>
            <div className={styles.postContainer}>
                <div className={styles.postContainerHeader}>
                    <p>{props.userName}</p>
                    <div className={styles.headerLikes}>
                        <p>10,920 Likes</p>
                        <div className={styles.iconCircle}>
                        <svg className={styles.icon} width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Heart">
                                <path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M4.28472 0.286348C0.582052 1.41945 -0.738149 5.24881 0.391497 8.59912C2.20862 13.9716 10.0014 18 10.0014 18C10.0014 18 17.8521 13.9096 19.6102 8.59912C20.7388 5.24881 19.4102 1.41945 15.7075 0.286348C13.762 -0.306707 11.5332 0.0733286 10.0014 1.19843C8.38219 0.0413257 6.23239 -0.310707 4.28472 0.286348ZM13.7574 3.27342C13.3561 3.17072 12.9476 3.41276 12.8448 3.81404C12.7421 4.21532 12.9842 4.62388 13.3855 4.72658C14.768 5.08042 15.5877 6.00903 15.6825 6.93366C15.7247 7.34572 16.093 7.64549 16.5051 7.60323C16.9171 7.56097 17.2169 7.19267 17.1747 6.78062C16.9982 5.06045 15.5644 3.73591 13.7574 3.27342Z" fill="#C5D0E6"/>
                            </g>
                        </svg>
                        </div>
                    </div>
                </div>

                <textarea 
                    className={styles.post} 
                    name="" 
                    id="" 
                    cols="30" 
                    rows="10"
                    readOnly
                    value={props.post}>
                </textarea>

            </div>

        </>
    )
}