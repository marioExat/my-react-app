import styles from "./Map.module.css";

function MapComponent() {
    const users = [
        { id: 1, name: 'Nathan', role: 'Web Developer' },
        { id: 2, name: 'John', role: 'Web Designer' },
        { id: 3, name: 'Jane', role: 'Team Leader' },
    ]

    // reducer function in react/js using lambda
    let sumOfIds = users.reduce((acc,user) => acc + user.id, 0);
     // reducer function in react/js using normal function
    sumOfIds = users.reduce(
        function(accumulator, user) {
            return accumulator + user.id;
         } 
    ,0);

    return (
        <>
        {/* Map function using a normal function  */}
        {/* Tailwindcss is used in the below h1 heading */}
          <h1 className="text-3xl font-bold underline">Map Component</h1>
          <p className={styles.BlueParagraph }>The currently active users list: </p>
          <ul className={styles.GreenList}>
            {
                users.map(function(user) {
                    return (
                        < li 
                          className={styles.GreenList}
                          key={user.id}> 
                            {user.name} as the {user.role}
                        </li>
                    )
                })
            }
          </ul>

        {/* Map function using a lambda expression */}
          <p>The currently active users are: </p>
          <ol>
            { 
              users.map((user, index) => 
                <li key={index}>{user.id} <b>{user.name}</b></li>) 
            }
          </ol>


          <p>The sum of active users id's are:  
            <em> { sumOfIds }</em>
          </p>
        </>
    )
}

export default MapComponent;