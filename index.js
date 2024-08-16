const Button = props => {
  //  Write your code here.
  const {buttonText, className} = props
  return <button className={`button ${className}`}>{buttonText}</button>
}

const element = (
  //  Write your code here.
  <div className='social-buttons-background-image'>
    <h1 className='social-heading'>Social Buttons</h1>
    <div className='button-container'>
      <Button buttonText='Like' className='Like-button' />
      <Button buttonText='comment' className='comment-button' />
      <Button buttonText='share' className='share-button' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
