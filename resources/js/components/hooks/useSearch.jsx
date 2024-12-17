import { useState } from 'react'
import fileContent from '../../../../public/json/suggestions.json'

export function useSearch (searchQuery) {
    const [suggestions, setSuggestions] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [errors, setErrors] = useState([])
    const [query, setQuery] = useState(searchQuery)
    const [isLoading, setLoading] = useState(false)

    const search = () => {
        //
    }

    const suggest = () => {
        if (query !== null && query !== '') {
            const arr = fileContent.filter(s => {
                if (
                    s.v_name
                        .toLowerCase()
                        .includes(query.toLowerCase().trim()) ||
                    s.description
                        .toLowerCase()
                        .includes(query.toLowerCase().trim()) ||
                    s.channel.channel_name
                        .toLowerCase()
                        .includes(query.toLowerCase().trim())
                ) {
                    return true
                } else {
                    return false
                }
            })
            setSuggestions(arr)
        } else {
            setSuggestions([])
        }
    }
    return {
        suggestions,
        suggest,
        setSuggestions,
        searchResult,
        search,
        errors,
        setQuery,
        query,
        isLoading
    }
}
