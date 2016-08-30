class Header extends React.Component {
   constructor(props) {
      super(props)
      this.state = { shrink: false }
   }

   componentDidMount() {
      window.onscroll = this.handleScroll.bind(this)
   }

   componentWillUnmount() {
      window.onscroll = null
   }

   handleScroll(e) {
      const top = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);

      top > 20 ? this.setState({ shrink: true }) : this.setState({ shrink: false })
   }

   render () {
      const shrink = this.state.shrink ? 'shrink' : ''
      return (
         <header className={`hc-header ${shrink}`}>
            <h1 className='hc-title'>Hey, I'm Cookie.</h1>
            <span className="hc-description">Ph.D in literature. Been helping others edit/write since 1994.</span>
            <div className="cookie">
               <img src="https://pbs.twimg.com/profile_images/748401641095733248/G2W6iV44.jpg" />
            </div>
         </header>
      );
   }
}

