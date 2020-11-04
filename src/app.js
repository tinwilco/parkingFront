console.log("App.js is running");


let parkingSpaceArray = [
    
    
    {id: "A1", reg:"free", colour:"red"},
    {id: "A2", reg:"free", colour:"red"},
    {id: "A3", reg:"free", colour:"red"},
    {id: "A4", reg:"free", colour:"red"},
    {id: "A5", reg:"free", colour:"red"},
    {id: "A6", reg:"free", colour:"red"},
    {id: "A7", reg:"free", colour:"red"},
    {id: "A8", reg:"free", colour:"red"},
    {id: "A9", reg:"free", colour:"red"},
    {id: "A10", reg:"free", colour:"red"},

    {id: "B1", reg:"free", colour:"red"},
    {id: "B2", reg:"free", colour:"red"},
    {id: "B3", reg:"free", colour:"red"},
    {id: "B4", reg:"free", colour:"red"},
    {id: "B5", reg:"free", colour:"red"},
    {id: "B6", reg:"free", colour:"red"},
    {id: "B7", reg:"free", colour:"red"},
    {id: "B8", reg:"free", colour:"red"},
    {id: "B9", reg:"free", colour:"red"},
    {id: "B10", reg:"free", colour:"red"},

    {id: "C1", reg:"free", colour:"red"},
    {id: "C2", reg:"free", colour:"red"},
    {id: "C3", reg:"free", colour:"red"},
    {id: "C4", reg:"free", colour:"red"},
    {id: "C5", reg:"free", colour:"red"},
    {id: "C6", reg:"free", colour:"red"},
    {id: "C7", reg:"free", colour:"red"},
    {id: "C8", reg:"free", colour:"red"},
    {id: "C9", reg:"free", colour:"red"},
    {id: "C10", reg:"free", colour:"red"},

    {id: "D1", reg:"free", colour:"red"},
    {id: "D2", reg:"free", colour:"red"},
    {id: "D3", reg:"free", colour:"red"},
    {id: "D4", reg:"free", colour:"red"},
    {id: "D5", reg:"free", colour:"red"},
    {id: "D6", reg:"free", colour:"red"},
    {id: "D7", reg:"free", colour:"red"},
    {id: "D8", reg:"free", colour:"red"},
    {id: "D9", reg:"free", colour:"red"},
    {id: "D10", reg:"free", colour:"red"}


]

let reg = '';


let apiData = ''

const getApiData = (e) => {

    fetch('https://nfs9bwjpoc.execute-api.eu-west-2.amazonaws.com/prod/ReservationManager?date=2020-10-11')
    .then(res => res.json())
    .then((data) => {
     // this.setState({ contacts: data })
     console.log(JSON.stringify(data));
     apiData = JSON.stringify(data);
     render();
    })
    .catch(console.log)


}

const dataClick = (e) => {
 if (reg){

    console.log(e.currentTarget);

    let parkingSpace = parkingSpaceArray.find(space=> space.id === e.currentTarget.children[2].id);

    if (parkingSpace.colour === 'blue'){

        alert("Space "+parkingSpace.id+" has already been reserved");
        return;

    }

    let mySpace = parkingSpaceArray.find(space=> space.reg.toLowerCase() === reg.toLowerCase());

    if (mySpace)
    {
        alert("Space "+  mySpace.id + "  has already been reserved for registration "+mySpace.reg );
        return;
    }

    parkingSpace.reg=reg;
    parkingSpace.colour='blue';


    render();

  }
}

const regChanged = (e) =>{

    reg = e.target.value;
    console.log(reg);

}





var appRoot = document.getElementById('app');

const render = () => {

    var template = (

  
    
        <div>
        
            <h1>Parking App</h1>
            <button onClick={getApiData}>Get API Data</button>
            <br></br>
            <br></br>
            <label>{apiData}</label>

            <h3>Enter your car registration in the box and click on a parking space to reserve it</h3>
            
           <label>Car Reg:</label> <input type='text' onChange={regChanged} style={{width:'100px'}} name="reserveSpace"></input> 
        
            <br></br>
            <br></br>

           
            <table  style={{width:'800px'}}>
            <tbody>
            <tr>
            <td onClick={dataClick}><label>A1</label><br></br><label id='A1' style={{ color: parkingSpaceArray.find(x=>x.id ==="A1").colour,}}>{parkingSpaceArray.find(x=>x.id ==="A1").reg} </label></td>
            <td onClick={dataClick}><label>A2</label><br></br><label id='A2' style={{ color: parkingSpaceArray.find(x=>x.id ==="A2").colour,}}>{parkingSpaceArray.find(x=>x.id ==="A2").reg} </label></td>
            <td onClick={dataClick}><label>A3</label><br></br><label id='A3' style={{ color: parkingSpaceArray.find(x=>x.id ==="A3").colour,}}>{parkingSpaceArray.find(x=>x.id ==="A3").reg} </label></td>
            <td onClick={dataClick}><label>A4</label><br></br><label id='A4' style={{ color: parkingSpaceArray.find(x=>x.id ==="A4").colour,}}>{parkingSpaceArray.find(x=>x.id ==="A4").reg} </label></td>
            <td onClick={dataClick}><label>A5</label><br></br><label id='A5' style={{ color: parkingSpaceArray.find(x=>x.id ==="A5").colour,}}>{parkingSpaceArray.find(x=>x.id ==="A5").reg} </label></td>
            <td onClick={dataClick}><label>A6</label><br></br><label id='A6' style={{ color: parkingSpaceArray.find(x=>x.id ==="A6").colour,}}>{parkingSpaceArray.find(x=>x.id ==="A6").reg} </label></td>
            <td onClick={dataClick}><label>A7</label><br></br><label id='A7' style={{ color: parkingSpaceArray.find(x=>x.id ==="A7").colour,}}>{parkingSpaceArray.find(x=>x.id ==="A7").reg} </label></td>
            <td onClick={dataClick}><label>A8</label><br></br><label id='A8' style={{ color: parkingSpaceArray.find(x=>x.id ==="A8").colour,}}>{parkingSpaceArray.find(x=>x.id ==="A8").reg} </label></td>
            <td onClick={dataClick}><label>A9</label><br></br><label id='A9' style={{ color: parkingSpaceArray.find(x=>x.id ==="A9").colour,}}>{parkingSpaceArray.find(x=>x.id ==="A9").reg} </label></td>
            <td onClick={dataClick}><label>A10</label><br></br><label id='A10' style={{ color: parkingSpaceArray.find(x=>x.id ==="A10").colour,}}>{parkingSpaceArray.find(x=>x.id ==="A10").reg} </label></td>
             </tr>
            <tr>
            <td onClick={dataClick}><label>B1</label><br></br><label id='B1' style={{ color: parkingSpaceArray.find(x=>x.id ==="B1").colour,}}>{parkingSpaceArray.find(x=>x.id ==="B1").reg} </label></td>
            <td onClick={dataClick}><label>B2</label><br></br><label id='B2' style={{ color: parkingSpaceArray.find(x=>x.id ==="B2").colour,}}>{parkingSpaceArray.find(x=>x.id ==="B2").reg} </label></td>
            <td onClick={dataClick}><label>B3</label><br></br><label id='B3' style={{ color: parkingSpaceArray.find(x=>x.id ==="B3").colour,}}>{parkingSpaceArray.find(x=>x.id ==="B3").reg} </label></td>
            <td onClick={dataClick}><label>B4</label><br></br><label id='B4' style={{ color: parkingSpaceArray.find(x=>x.id ==="B4").colour,}}>{parkingSpaceArray.find(x=>x.id ==="B4").reg} </label></td>
            <td onClick={dataClick}><label>B5</label><br></br><label id='B5' style={{ color: parkingSpaceArray.find(x=>x.id ==="B5").colour,}}>{parkingSpaceArray.find(x=>x.id ==="B5").reg} </label></td>
            <td onClick={dataClick}><label>B6</label><br></br><label id='B6' style={{ color: parkingSpaceArray.find(x=>x.id ==="B6").colour,}}>{parkingSpaceArray.find(x=>x.id ==="B6").reg} </label></td>
            <td onClick={dataClick}><label>B7</label><br></br><label id='B7' style={{ color: parkingSpaceArray.find(x=>x.id ==="B7").colour,}}>{parkingSpaceArray.find(x=>x.id ==="B7").reg} </label></td>
            <td onClick={dataClick}><label>B8</label><br></br><label id='B8' style={{ color: parkingSpaceArray.find(x=>x.id ==="B8").colour,}}>{parkingSpaceArray.find(x=>x.id ==="B8").reg} </label></td>
            <td onClick={dataClick}><label>B9</label><br></br><label id='B9' style={{ color: parkingSpaceArray.find(x=>x.id ==="B9").colour,}}>{parkingSpaceArray.find(x=>x.id ==="B9").reg} </label></td>
            <td onClick={dataClick}><label>B10</label><br></br><label id='B10' style={{ color: parkingSpaceArray.find(x=>x.id ==="B10").colour,}}>{parkingSpaceArray.find(x=>x.id ==="B10").reg} </label></td>
       
            </tr>
            <tr>
            <td onClick={dataClick}><label>C1</label><br></br><label id='C1' style={{ color: parkingSpaceArray.find(x=>x.id ==="C1").colour,}}>{parkingSpaceArray.find(x=>x.id ==="C1").reg} </label></td>
            <td onClick={dataClick}><label>C2</label><br></br><label id='C2' style={{ color: parkingSpaceArray.find(x=>x.id ==="C2").colour,}}>{parkingSpaceArray.find(x=>x.id ==="C2").reg} </label></td>
            <td onClick={dataClick}><label>C3</label><br></br><label id='C3' style={{ color: parkingSpaceArray.find(x=>x.id ==="C3").colour,}}>{parkingSpaceArray.find(x=>x.id ==="C3").reg} </label></td>
            <td onClick={dataClick}><label>C4</label><br></br><label id='C4' style={{ color: parkingSpaceArray.find(x=>x.id ==="C4").colour,}}>{parkingSpaceArray.find(x=>x.id ==="C4").reg} </label></td>
            <td onClick={dataClick}><label>C5</label><br></br><label id='C5' style={{ color: parkingSpaceArray.find(x=>x.id ==="C5").colour,}}>{parkingSpaceArray.find(x=>x.id ==="C5").reg} </label></td>
            <td onClick={dataClick}><label>C6</label><br></br><label id='C6' style={{ color: parkingSpaceArray.find(x=>x.id ==="C6").colour,}}>{parkingSpaceArray.find(x=>x.id ==="C6").reg} </label></td>
            <td onClick={dataClick}><label>C7</label><br></br><label id='C7' style={{ color: parkingSpaceArray.find(x=>x.id ==="C7").colour,}}>{parkingSpaceArray.find(x=>x.id ==="C7").reg} </label></td>
            <td onClick={dataClick}><label>C8</label><br></br><label id='C8' style={{ color: parkingSpaceArray.find(x=>x.id ==="C8").colour,}}>{parkingSpaceArray.find(x=>x.id ==="C8").reg} </label></td>
            <td onClick={dataClick}><label>C9</label><br></br><label id='C9' style={{ color: parkingSpaceArray.find(x=>x.id ==="C9").colour,}}>{parkingSpaceArray.find(x=>x.id ==="C9").reg} </label></td>
            <td onClick={dataClick}><label>C10</label><br></br><label id='C10' style={{ color: parkingSpaceArray.find(x=>x.id ==="C10").colour,}}>{parkingSpaceArray.find(x=>x.id ==="C10").reg} </label></td>
       
            </tr>
            <tr>
            <td onClick={dataClick}><label>D1</label><br></br><label id='D1' style={{ color: parkingSpaceArray.find(x=>x.id ==="D1").colour,}}>{parkingSpaceArray.find(x=>x.id ==="D1").reg} </label></td>
            <td onClick={dataClick}><label>D2</label><br></br><label id='D2' style={{ color: parkingSpaceArray.find(x=>x.id ==="D2").colour,}}>{parkingSpaceArray.find(x=>x.id ==="D2").reg} </label></td>
            <td onClick={dataClick}><label>D3</label><br></br><label id='D3' style={{ color: parkingSpaceArray.find(x=>x.id ==="D3").colour,}}>{parkingSpaceArray.find(x=>x.id ==="D3").reg} </label></td>
            <td onClick={dataClick}><label>D4</label><br></br><label id='D4' style={{ color: parkingSpaceArray.find(x=>x.id ==="D4").colour,}}>{parkingSpaceArray.find(x=>x.id ==="D4").reg} </label></td>
            <td onClick={dataClick}><label>D5</label><br></br><label id='D5' style={{ color: parkingSpaceArray.find(x=>x.id ==="D5").colour,}}>{parkingSpaceArray.find(x=>x.id ==="D5").reg} </label></td>
            <td onClick={dataClick}><label>D6</label><br></br><label id='D6' style={{ color: parkingSpaceArray.find(x=>x.id ==="D6").colour,}}>{parkingSpaceArray.find(x=>x.id ==="D6").reg} </label></td>
            <td onClick={dataClick}><label>D7</label><br></br><label id='D7' style={{ color: parkingSpaceArray.find(x=>x.id ==="D7").colour,}}>{parkingSpaceArray.find(x=>x.id ==="D7").reg} </label></td>
            <td onClick={dataClick}><label>D8</label><br></br><label id='D8' style={{ color: parkingSpaceArray.find(x=>x.id ==="D8").colour,}}>{parkingSpaceArray.find(x=>x.id ==="D8").reg} </label></td>
            <td onClick={dataClick}><label>D9</label><br></br><label id='D9' style={{ color: parkingSpaceArray.find(x=>x.id ==="D9").colour,}}>{parkingSpaceArray.find(x=>x.id ==="D9").reg} </label></td>
            <td onClick={dataClick}><label>D10</label><br></br><label id='D10' style={{ color: parkingSpaceArray.find(x=>x.id ==="D10").colour,}}>{parkingSpaceArray.find(x=>x.id ==="D10").reg} </label></td>
       
            </tr>
            </tbody>
            
        </table>
    
           
        
        </div>
    
    )

    ReactDOM.render(template,appRoot);
    


}


render();

