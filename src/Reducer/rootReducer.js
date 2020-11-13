const initState={
  userData:[],
  posts:"",
  info:[
    {
      id:0,
      service:'Digital Marketing',
      img:"https://cdn.pixabay.com/photo/2019/05/26/06/05/digital-marketing-4229637__340.jpg",
      desc:"you're basically helping companies promote their products and services online. Your job is to reach out to your client's target audience, drive them to your client's website, and convert them as paying customers.",
    },
    {
      id:1,
      service:'Graphic design',
      img:"https://cdn.pixabay.com/photo/2017/08/10/09/48/designer-2620668_960_720.png",
      desc:"Graphic designers combine their creativity and artistic talent with their mastery of technologies to create text and images for a variety of clients—from the designing of one small logo to the creation of an entire branding package."

    },{
      id:2,
      service:'Content Writing',
      img:"https://cdn.pixabay.com/photo/2018/03/07/09/11/writing-3205561_960_720.jpg",
      desc:"Content Writers produce relevant content for websites, blogs, articles, white papers, product descriptions, and social media platforms."

    },
    {
      id:3,
      service:'Social Media Manager',
      img:'https://cdn.pixabay.com/photo/2017/01/06/20/19/social-1958774_960_720.jpg',
      desc:'As a social media manager, you will be responsible for managing all social media channels of a business, gaining followers, getting the message and voice of the company across, and interacting with social media users in a customer-service-type role.'
    },
    {
      id:4,
      service:'Photographer',
      img:"https://cdn.pixabay.com/photo/2012/04/12/20/01/photographer-30423_960_720.png",
      desc:'If you have an at-home studio, you can shoot portraits from there. Alternatively, provide editing and retouching and work from home. If you’re looking for something more casual and have a large portfolio, you can sell your photos on like Society 6.'
    },
    {
      id:5,
      service:'Illustrator',
      img:"https://cdn.pixabay.com/photo/2018/04/09/19/55/low-poly-3305284_960_720.jpg",
      desc:'Create images for projects like books, magazines, cards, advertisements, posters, murals, and web graphics. Illustration is less technical than graphic design and often allows the user to work on fun projects, like children’s books!'


    }
  ]
}
const rootReducer = (state=initState,action) => {
  if (action.type === 'add_post')
        {  console.log(action);
          if (action.isClick === true)
                return {...state,posts:"beforeClick"}
        else
              return {...state,posts:"afterClick"}
        }

  if(action.type === 'add_data'){
    console.log(action.data);
    return{...state,userData:[...state.userData,action.data]}
  }


  return state

}

export default rootReducer;
