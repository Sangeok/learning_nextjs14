
import { testFormAction } from "../server/actions/testFormAction"
import { testGetData } from "../server/actions/testGetData";

export default async function AboutUsPage() {
    const res = await testGetData().then((res) => res.data.message);
    
    return (
        <div>
            <form action={testFormAction}>
                <input type="text" name="name" />
                <button type="submit">Submit</button>
            </form>
            About Us!
            <br />
            Test for getting data from server :  
            {
                res
            }
        </div>
    )
}