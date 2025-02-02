const LanguageSelector = () => {
  const languages = ['JavaScript', 'TypeScript', 'Python']
  return (
    <select>
      {languages.map((language, index) => (
        <option key={index} value={language}>
          {language}
        </option>
      ))} 
    </select>
  )

}
export default LanguageSelector