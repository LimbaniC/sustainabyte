
import { useAppContext } from '../WrapperComponent/ContextWrapper';
import "./saved.css";


export function SavedCard({user}:{user:string}){

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

function DonatedCard({user}:{user:string})
{
  const {donatedFoods,removeDonatedFood} = useAppContext();

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



export function Saved({user}:{user: string}){


    const {savedFoods,donatedFoods} = useAppContext();

  
    return(
      <div className ="center-saved">
        
      {savedFoods.length >0 && <SavedCard user={user}/>}

        
      {donatedFoods.length > 0 && <DonatedCard user={user}/>}
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