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
            , div [ class "entry" ] [ b [] [ text "University of Gothenburg" ], span [] [ text " | 2026 - 2029 | Bachelor of Science in Computer Science" ] ]
            , div [ class "entry" ] [ b [] [ text "Komvux Alingsås" ], span [] [ text " | 2024 - 2026 | High school diploma for university admittance" ] ]
            , div [ class "entry" ] [ b [] [ text "Technische Berufsschule Zurich" ], span [] [ text " | 2020 - 2024 | Technical Highschool during apprenticeship" ] ]
            ]


        , section []
            [ h2 [] [ text "Experience" ]
            , div [ class "entry" ] [ b [] [ text "Silverbeard Engineering AB" ], span [] [ text " | 2024 - Present | Quantitative Software Engineer" ] ]
            , div [ class "entry" ] [ b [] [ text "Eniwa AG" ], span [] [ text " | 05.2025 - 08.2025  | Software Engineer Intern" ] ]
            , div [ class "entry" ] [ b [] [ text "UBS" ], span [] [ text " | 2020 - 2024 | Platform Engineer Apprentice" ] ]
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
