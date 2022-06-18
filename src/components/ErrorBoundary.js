import React from "react";

    class ErrorBoundary extends React.Component{
        constructor(){
            super();
            this.state={
               hasError:false, 
               message:null,
            };
        }


        static getDerivedStateFromError(error){

            //biasanya digunakan oleh developer untuk menaruh fallback UI
          return{hasError:true, message:error.message}
        }

        componentDidCatch(error){
            //mengeksekusi pengirirman error ke sebuah error dashboar/API tertentu
            
        }


        render(){
            if(this.state.hasError){
                return <h1>something went wrong {this.state.message}</h1>
            }

           return this.props.children;
            }
    }

    export default ErrorBoundary;