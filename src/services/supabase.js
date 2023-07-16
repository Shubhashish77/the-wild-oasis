
import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://ldmlmggyxqzbhfinlibh.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkbWxtZ2d5eHF6YmhmaW5saWJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzMzY3MTEsImV4cCI6MjAwNDkxMjcxMX0.lDLjbf-fBoVQBv3SvWyW6ZOrySCsG7vcQiokir9kYQ0'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;