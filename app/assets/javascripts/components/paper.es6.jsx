class Paper extends React.Component {
  render () {
    return (
      <div className='hc-paper'>
          <form ref='form' className='content-form' action={this.props.form.action} acceptCharset="UTF-8" method="post">
            <input type="hidden" name={this.props.form.csrf_param} value={this.props.form.csrf_token} />

            <div className='content-container'>
              <textarea
                className='content'
                autoFocus={true}
                placeholder='Enter what you want me to look over...'
                name='paper[content]'>
              </textarea>
            </div>
            <input
              type='email'
              placeholder='Email I should reach you at'
              name='paper[email]'
            />
            <button className='button main'>
              Submit
            </button>
          </form>
      </div>
    );
  }
}

Paper.propTypes = {
  paper: React.PropTypes.object.isRequired,
  form: React.PropTypes.shape({
    action: React.PropTypes.string.isRequired,
    csrf_param: React.PropTypes.string.isRequired,
    csrf_token: React.PropTypes.string.isRequired
  })
};
