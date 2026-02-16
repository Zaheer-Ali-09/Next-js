import Link from "next/link"

export default function Students({ params }) {
  const { classId } = params

  const students = Array.from({ length: 15 }, (_, i) => i + 1)

  return (
    <div>
      <h1>Class {classId} Students</h1>

      {students.map((std) => (
        <div key={std}>
          <Link href={`/classes/${classId}/${std}`}>
            Student {std}
          </Link>
        </div>
      ))}
    </div>
  )
}
