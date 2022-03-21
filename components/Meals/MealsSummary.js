import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious food , Delivered To You</h2>
      <p>
        <strong>DELICIOUS</strong> is a reader's and a cook's paradise.
        DELICIOUS is one wonderful page of words after another. The magic never
        stopped as Ms. Reichl introduced the reader to her believable, lovable
        characters and to mouthwatering food. Billie and every single character
        will steal your heart. The characters just had somethinG TO EAT.
      </p>
      {/* <p>
        DELICIOUS is a reader's and a cook's paradise. DELICIOUS is one
        wonderful page of words after another. The magic never stopped as Ms.
        Reichl introduced the reader to her believable, lovable characters and
        to mouthwatering food. Billie and every single character will steal your
        heart. The characters just had somethinG TO EAT.
      </p> */}
    </section>
  );
};

export default MealsSummary;
