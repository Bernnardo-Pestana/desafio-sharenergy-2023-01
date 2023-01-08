import Datalist from "../../components/datalist/datalist";
function Cat() {
  const header = [
    {
      label:'Id',
      value : 'id'
    },
    {
      label:'Nome',
      value : 'name'
    },
    {
      label:'Email',
      value : 'email'
    },
    {
      label:'Options',
      value : ''
    },
  ]

 const data = [
    {
      id:'1',
      name:'John',
      email:'john@example.com'
    },
    {
      id:'2',
      name:'Mary',
      email:'mary@example.com'
    },
    {
      id:'3',
      name:'Ricky',
      email:'ricky@example.com'
    },
    {
      id:'4',
      name:'Jordan',
      email:'jordan@example.com'
    },
    {
      id:'1',
      name:'John',
      email:'john@example.com'
    },
    {
      id:'2',
      name:'Mary',
      email:'mary@example.com'
    },
    {
      id:'3',
      name:'Ricky',
      email:'ricky@example.com'
    },
    {
      id:'4',
      name:'Jordan',
      email:'jordan@example.com'
    },
    
  ]

    return (
     <div className="">
        <h1 className="text-3xl font-bold underline">
          Hy yo soy Cat!
        </h1>

        <div>
          <Datalist header={header} data={data}/>
        </div>

     </div>
    );
  }


export default Cat;