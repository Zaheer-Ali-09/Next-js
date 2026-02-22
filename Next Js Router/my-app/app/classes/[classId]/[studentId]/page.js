export default function StudentDetail({ params }) {
    const { classId, studentId } = params

    const assignments = [
        { title: "Math Homework", status: "Pending" },
        { title: "English Essay", status: "Completed" }
    ]

    return (
        <div>
            <h1>Class {classId} - Student {studentId}</h1>

            {assignments.map((a, i) => (
                <div key={i}>
                    <p>{a.title} - {a.status}</p>
                </div>
            ))}
        </div>
    )
}
// _____________
