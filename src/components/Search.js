import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResult from './ImageResult';


 class Search extends Component {

    state = {
        searchText: '',
        amount: 15,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '18887118-5584e89c86d3c52388ca06b96',
        images: []
      };


      handleChange=(e)=>{

        let val = e.target.value
           this.setState({
               [e.target.name]:val
           },
           
           ()=>{

            if(val==='')
            {
                this.setState({
                    images:[]
                })
            }
            else
            {

            
                   
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
            .then((res)=>{
                this.setState({
                    images:res.data.hits
                })
            })
            .catch((err)=>{
                console.log(err)
            })

        }
}

           )
      }


      onAmountChange = (e, index, value) => {
          console.log(value)
          this.setState({ amount: value });
      }



    




    render() {
        console.log(this.state.images)
    
        const {images} = this.state;
        return (
            <>
                   <TextField
                         name="searchText"
                        value={this.state.searchText}
                        onChange={this.handleChange}
                        floatingLabelText="Search For Images"
                        fullWidth={true}
                   />
                    <br />

                            <SelectField
                            name="amount"
                            floatingLabelText="Amount"
                            value={this.state.amount}
                            onChange={this.onAmountChange}
                            >
                            <MenuItem value={5} primaryText="5" />
                            <MenuItem value={10} primaryText="10" />
                            <MenuItem value={15} primaryText="15" />
                            <MenuItem value={30} primaryText="30" />
                            <MenuItem value={50} primaryText="50" />
                            </SelectField>

                     <br />

                {
                    images.length > 0 ?
                     (
                          <ImageResult images={images}/>
                    ):null
                }
                    
            </>
        )
    }
}


export default  Search