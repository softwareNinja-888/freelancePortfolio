import upwork from '/ui/upwork.svg'

export function UpworkIcon({styles=''}) {
  return (
      <>

        <a href="https://www.upwork.com/freelancers/~01b74166653b9370d1" target="_blank">
          <img src={upwork} className={`${styles}`}/>
        </a>
      </>
    );
};

