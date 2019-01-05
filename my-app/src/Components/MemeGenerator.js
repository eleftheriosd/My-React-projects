import React from "react"


class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            allMemeImgs:[]
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleImg=this.handleImg.bind(this);
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response=>{
                const {memes} =response.data
                this.setState({allMemeImgs:response.data.memes})
            })
    }
    
handleChange(event) {
    const {name,value}=event.target
    this.setState({[name]:value})
}
handleImg(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({randomImg: randMemeImg})
}
    render() {
        return (
            <div>
                <br />
                <form className="meme-form">
                <label>
                  <input 
                  type="text"
                  placeholder="topText"
                  name="topText"
                  value={this.state.topText}
                  onChange={this.handleChange}
                  />
                  <br />
                  <br />
                  </label>
                  <label>
                  <input 
                  type="text"
                  placeholder="bottomText"
                  name="bottomText"
                  value={this.state.bottomText}
                  onChange={this.handleChange}
                  />
                  </label>
                  <br />
                  <br />
                    <button onClick={this.handleImg}>Gen</button>
                </form>
                <div>
                    <img src={this.state.randomImg} alt="" />
                    <h2>{this.state.topText}</h2>
                    <h2>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}
export default MemeGenerator;