import CredentialsProvider from  'next-auth';
import axios from "../../../components/axiosInstance";

export const authOptions={
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email :{label:"email",type:"text"},
                password:{label:"password", type:"password"}
            },
            async authorize(credentials,req){
                try{
                    const response= await axios.post("/login",credentials);
                    console.log("Credentials:",credentials);

                    if(response.status===200){
                        return {email: credentials.email};
                    }
                    else{
                        console.log("invalid credentials");
                    }
                
                }catch(error){
                }
            }
        })
    ],
    pages:{
        signIn:"/login",
        error:"/login",
    },
    secret:process.env.NEXTAUTH_SECRET
};


