import axios from "axios"

export default useAxios = () => {

    const axiosGet = async(URL,onSuccess,onFailed) => {
        axios.get(URL).then((data) => {
            if(onSuccess){
                onSuccess(data)
            }
            else{
                console.log(data);
            }
        }).catch((err) => {
            console.log(err);
        })
           
    }


    return {
        axiosGet,
    }
}