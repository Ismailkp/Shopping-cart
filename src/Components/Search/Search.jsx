import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ApiData } from '../../Features/FeaturesSlice'

export const Search = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { data = [] } = useSelector(state => state.Api_data)

  useEffect(() => {
    dispatch(ApiData())
  }, [dispatch])

  const MIN_LENGTH = 2

  const filteredData =
    query.trim().length < MIN_LENGTH
      ? []
      : data.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )

  const handleSelect = (item) => {
    setQuery('')
    navigate(`/product/${item.id}`)
  }

  return (
    <div className="relative w-80">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="w-full px-4 py-2 rounded-xl border"
      />

      {query.length >= MIN_LENGTH && (
        <div className="absolute left-0 right-0 shadow-lg rounded-xl mt-2 z-50 max-h-60 overflow-y-auto">
          {filteredData.length === 0 ? (
            <p className="p-3 text-gray-500">No results found</p>
          ) : (
            filteredData.map(item => (
              <div
                key={item.id}
                onClick={() => handleSelect(item)}
                className="p-3 hover:bg-gray-100 cursor-pointer"
              >
                {item.title}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}
