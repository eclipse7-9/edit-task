import { useState } from "react";

export default function TodoItem({ tarea, toggleCompleted, eliminarTarea, editarTarea }) {
  const [editMode, setEditMode] = useState(false);
  const [nuevoTexto, setNuevoTexto] = useState(tarea.text);

  const guardarEdicion = () => {
    if (nuevoTexto.trim()) {
      editarTarea(tarea.id, nuevoTexto.trim());
      setEditMode(false);
    }
  };

  return (
    <div className="flex items-center justify-between p-2 border rounded">
      {editMode ? (
        <input
          className="flex-1 p-1 border rounded mr-2"
          value={nuevoTexto}
          onChange={(e) => setNuevoTexto(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && guardarEdicion()}
        />
      ) : (
        <span
          className={`flex-1 ${tarea.completed ? "line-through text-gray-400" : ""}`}
          onDoubleClick={() => setEditMode(true)}
        >
          {tarea.text}
        </span>
      )}

      <div className="flex gap-2">
        {editMode ? (
          <button
            className="bg-green-500 text-white px-2 py-1 rounded"
            onClick={guardarEdicion}
          >
            Guardar
          </button>
        ) : (
          <button
            className="bg-yellow-500 text-white px-2 py-1 rounded"
            onClick={() => setEditMode(true)}
          >
            Editar
          </button>
        )}

        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={() => eliminarTarea(tarea.id)}
        >
          Eliminar
        </button>

        <button
          className="bg-blue-500 text-white px-2 py-1 rounded"
          onClick={() => toggleCompleted(tarea.id)}
        >
          {tarea.completed ? "Desmarcar" : "Completar"}
        </button>
      </div>
    </div>
  );
}