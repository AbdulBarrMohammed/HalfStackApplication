const Course = ({course}) => {
    const partsArray = course.parts;
    //let total = 0;

    //partsArray.forEach((element, index, array) => {
    //    total += element.exercises;
    //});
    const total = partsArray.reduce((accumulator, currentPart) => {
        return accumulator + currentPart.exercises;
    }, 0);
    //console.log(total);
    if (partsArray.length === 0) {
        return (
            <>
                <p>parts empty</p>
            </>
        )
    }
    return (
        <>
            <h1>{course.name}</h1>

                {partsArray.map(c =>
                    <p key={c.id}>
                        {c.name} {c.exercises}

                    </p>
                )}
                <h4>total of {total} exercises</h4>

        </>
    )
  }

  export default Course;
