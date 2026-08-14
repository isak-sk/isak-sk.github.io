module HomePage exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (..)

main =
    Browser.sandbox { init = init, update = update, view = view }

type alias Model = {}

init : Model
init = {}

type Msg = NoOp

update : Msg -> Model -> Model
update _ model = model

view : Model -> Html Msg
view _ =
    div [ class "container" ]
        [ section [ class "intro" ]
            [ img [ src "img/img.jpeg", class "avatar" ] []
            , h1 [] [ text "Isak Skoog" ]
            , p [ class "tagline" ] [ text "21yo · CS Student · Quant Dev @ Silverbeard Engineering" ]
            , p [ class "bio" ] 
                [ text "Quant software engineer and computer science student based in Gothenburg, Sweden. Currently building quantitative trading systems while studying Computer Science. " ]
            ]
        
        , section []
            [ h2 [] [ text "Education" ]
            , div [ class "entry" ] [ b [] [ text "University of Gothenburg" ], span [] [ text " - Bachelor of Science in Computer Science | 2026 - 2029" ] ]
            , div [ class "entry" ] [ b [] [ text "Komvux Alingsås" ], span [] [ text " - High school diploma for university admittance | 2024 - 2026" ] ]
            , div [ class "entry" ] [ b [] [ text "Technische Berufsschule Zurich" ], span [] [ text " - Technical Highschool during apprenticeship | 2020 - 2024" ] ]
            ]


        , section []
            [ h2 [] [ text "Experience" ]
            , div [ class "entry" ] [ b [] [ text "Silverbeard Engineering AB" ], span [] [ text " - Quantitative Software Engineer | 2024 - Present" ] ]
            , div [ class "entry" ] [ b [] [ text "Eniwa AG" ], span [] [ text " - Software Engineer Intern | May 2025 - Aug. 2025" ] ]
            , div [ class "entry" ] [ b [] [ text "UBS" ], span [] [ text " - Platform Engineer Apprentice | 2020 - 2024" ] ]
            ]

        , section []
            [ h2 [] [ text "Side Projects" ]
            , a [ href "https://github.com/isak-sk/PowerMatch", class "proj-link" ] [ text "PowerMatch (archived internship project)" ]
            , a [ href "https://github.com/isak-sk/influxdb_trmnl_plugin", class "proj-link" ] [ text "TRMNL plugin for energy usage" ]
            , a [ href "https://github.com/isak-sk/epidemic-sim", class "proj-link" ] [ text "Simulation of an epidemic" ]
            ]

        , footer []
            [ a [ href "https://github.com/isak-sk" ] [ text "github" ]
            , text " / "
            , a [ href "https://linkedin.com/in/isakskoog" ] [ text "linkedin" ]
            , text " / "
            , a [ href "mailto:skoog.isak@gmail.com" ] [ text "email" ]
            ]
        ]
