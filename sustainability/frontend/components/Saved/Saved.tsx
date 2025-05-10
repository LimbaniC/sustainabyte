
import { useAppContext } from '../WrapperComponent/ContextWrapper';
import { useEffect,useState } from 'react';
import "./Saved.css";


export function SavedCard(){

  const [user, setUser] = useState("");

    useEffect(() => {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUser(storedUsername);
      }
    }, []);

  const {savedFoods, removeSavedFood,setSavedFoods} = useAppContext()
return(
  <div className ="saved-card">
            <p>Hello {user} you have saved:</p>
            <ul>
                {savedFoods.map((food,index)=>(
                    <li key={index} className="flex"><div className="square">
                    {food.imageUrl ? ( <img src={food.imageUrl} alt={food.foodName} />
            ) : (
              <div className="placeholder-scales square">No image</div>
            )}
          </div>{food.foodName}
            <button
            className="remove-button"
            onClick={() => removeSavedFood(index)}
            aria-label={`Remove ${food.foodName}`}
            >
            ❌
            </button></li>))
                }
                
            </ul>
          <button className='saved-button' onClick={() => setSavedFoods([])}> claim</button>
        </div>
)

}

function DonatedCard()
{
  const {donatedFoods,removeDonatedFood} = useAppContext();

  const [user, setUser] = useState("");

    useEffect(() => {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUser(storedUsername);
      }
    }, []);

  return (
    <div className ="saved-card">
            <p>Hello {user} you have donated:</p>
            <ul>
                {donatedFoods.map((food,index)=>(
                    <li key={index} className="flex"><div className="square">
                    {food.imageUrl ? ( <img src={food.imageUrl} alt={food.foodName} />
            ) : (
              <div className="placeholder-scales square">No image</div>
            )}
          </div>{food.foodName}
            <button
            className="remove-button"
            onClick={() => removeDonatedFood(index)}
            aria-label={`Remove ${food.foodName}`}
            >
            ❌
            </button></li>))
                }
                
            </ul>
        </div>
  )
}



export function Saved(){


    const {savedFoods,donatedFoods} = useAppContext();

  
    return(
      <div className ="center-saved">
        
      {savedFoods.length >0 && <SavedCard/>}

        
      {donatedFoods.length > 0 && <DonatedCard/>}
      {donatedFoods.length === 0 && savedFoods.length === 0 && (
        <div className='saved-card'>
          <p>
            Donate or save food for it to appear on this page :)
          </p>
        </div>
      )}



        </div>



    )

}