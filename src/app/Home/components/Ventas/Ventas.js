'use client'
import { FiSearch } from "react-icons/fi"
import { useVentas } from "./useVentas";
import ProductBadge from "./components/productBadge/ProductBadge";
const Ventas = () => {

  const {
    count,
    handleAddProduct,
    handleRemoveProduct,
    formatText,
    productosFiltrados,
    setBusqueda,
    busqueda,
    addProduct,
    productosCarrito
  } = useVentas();

  return (
    <div className="container mx-auto pt-6 flex">
      <div className="w-full flex flex-row gap-5">
        <div className="w-[70%] flex flex-col gap-4">
          <div className="w-full flex flex-row gap-2 items-center">
            <div className="w-full flex flex-row justify-between gap-2 items-center">
              <div className="text-2xl font-bold flex flex-row gap-2 items-center mb-2">
                <div>Realizar una venta</div>
              </div>
            </div>
            <div className="relative flex flex-row gap-2 items-center">
              <FiSearch className="absolute left-2 text-2xl text-gray-500" />
              <input
                className="p-2 pl-10 pr-4 border-[1.5px] border-gray-300 rounded-2xl outline-none"
                type="text"
                placeholder="Buscar producto..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
          </div>
          <div className="max-w-full overflow-y-auto h-[70vh] shadow-lg mt-2 shadow-slate-300 rounded-lg">
            <table className="min-w-full table-auto bg-white  rounded-lg">
              <thead>
                <tr className="bg-gray-200 text-left text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6">ID</th>
                  <th className="py-3 px-6">Nombre</th>
                  <th className="py-3 px-6">Descripción</th>
                  <th className="py-3 px-6">Precio</th>
                  <th className="py-3 px-6">Cantidad</th>
                  <th className="py-3 px-6">Acciones</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-md  font-normal">
                {productosFiltrados.map((producto) => (
                  <tr
                    key={producto.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      {producto.id}
                    </td>
                    <td className="py-3 px-6 text-left">{producto.nombre}</td>
                    <td className="py-3 px-6 text-left">{formatText(producto.descripcion)}</td>
                    <td className="py-3 px-6 text-left">{producto.precio}</td>
                    <td className="py-3 px-6 text-center">{producto.cantidad}</td>
                    <td className="py-3 px-6 text-center flex justify-center gap-2">
                      <button
                        onClick={() => addProduct(producto.id)}
                        className="bg-blue-500 text-lg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
														<path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
													</svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-[30%] flex flex-col items-center bg-[#f3f4f7] rounded-lg shadow-lg ">
          <div className="text-3xl font-semibold pt-4">Carrito de compras</div>
          <div className="w-full flex flex-col gap-5 pt-10 px-4 overflow-y-auto h-[70vh]">
							{productosCarrito.map((producto) => (
								<ProductBadge handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} count={count[producto.id]} producto={producto} />
							))}		
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ventas;  