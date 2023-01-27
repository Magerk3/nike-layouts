

export const IconSwitch = ({icon, onSwitch}) => {

    return (
        <div>
            <span class="material-icons" onClick={onSwitch}>{icon}</span>
        </div>
    )
}